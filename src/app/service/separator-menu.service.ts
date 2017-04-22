/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {EventEmitter, Injectable} from "@angular/core";
import {LifeService} from "./life.service";
import {PlayerStats} from "../models/player-stats";

@Injectable()
export class SeparatorMenuService {
  private _state: boolean = false;
  private _lifeRange: number = 20;

  public menuStateChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private lifeService: LifeService) {
  }

  get state(): boolean {
    return this._state;
  }

  set state(value: boolean) {
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
