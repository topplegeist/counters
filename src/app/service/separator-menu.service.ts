/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Injectable} from "@angular/core";
import {LifeService} from "./life.service";
import {PlayerStats} from "../models/player-stats";
import {SeparatorMenuState} from "../enums/separator-menu-state.enum";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class SeparatorMenuService {
  private _state: SeparatorMenuState = SeparatorMenuState.CLOSED;
  private _lifeRange: number = 20;

  public menuStateChanged: BehaviorSubject<SeparatorMenuState> = new BehaviorSubject(this._state);

  constructor(private lifeService: LifeService) {
  }

  get state(): SeparatorMenuState {
    return this._state;
  }

  set state(value: SeparatorMenuState) {
    this._state = value;
    this.menuStateChanged.next(this._state);
  }

  public resetLives() {
    this.lifeService.playersStats = this.lifeService.playersStats
      .map((stats: PlayerStats) => {
        stats.life = this.lifeRange;
        return stats;
      })
  }

  get lifeRange(): number {
    return this._lifeRange;
  }

  set lifeRange(value: number) {
    this._lifeRange = value;
  }
}
