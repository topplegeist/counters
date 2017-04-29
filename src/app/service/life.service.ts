/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Injectable} from "@angular/core";
import {PlayerStats} from "../models/player-stats.model";

@Injectable()
export class LifeService {
  public playersStats: PlayerStats[];

  constructor() {
    this.playersStats = [new PlayerStats(), new PlayerStats()];
  }
}
