/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Injectable} from "@angular/core";
import {LifeService} from "./life.service";
import {PlayerStats} from "../models/player-stats.model";
import {SeparatorMenuState} from "../enums/separator-menu-state.enum";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {DiceService} from "app/service/dice.service";
import {OptionalCountersService} from "./optional-counters.service";

@Injectable()
export class SeparatorMenuService {
  private _state: SeparatorMenuState = SeparatorMenuState.CLOSED;
  private _lifeRange: number = 20;

  public menuStateChanged: BehaviorSubject<SeparatorMenuState> = new BehaviorSubject(this._state);

  constructor(private lifeService: LifeService,
              private diceService: DiceService,
              private optionalCountersService: OptionalCountersService) {
  }

  get state(): SeparatorMenuState {
    return this._state;
  }

  set state(value: SeparatorMenuState) {
    this._state = value;
    this.menuStateChanged.next(this._state);
  }

  public resetCounters() {
    this.lifeService.playersStats = this.lifeService.playersStats
      .map((stats: PlayerStats) => {
        stats.life = this.lifeRange;
        return stats;
      });
    this.optionalCountersService.poisonCounterMenu = [false, false];
    this.optionalCountersService.commanderCounterMenu = [false, false];
    this.optionalCountersService.partnerCounterMenu = [false, false];
    this.optionalCountersService.citiesBlessingToken = [false, false];
    this.optionalCountersService.monarchToken = -1;
    this.optionalCountersService.poisonCounter = [0, 0];
    this.optionalCountersService.commanderCounter = [0, 0];
    this.optionalCountersService.partnerCounter = [0, 0];
  }

  public activateDices() {
    this.state = SeparatorMenuState.CLOSED;
    this.diceService.launchDices();
  }

  get lifeRange(): number {
    return this._lifeRange;
  }

  set lifeRange(value: number) {
    this._lifeRange = value;
  }

}
