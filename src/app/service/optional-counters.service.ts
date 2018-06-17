/**
 * Created by Topplegeist Team on 03/04/2017.
 */

import {Injectable} from "@angular/core";

@Injectable()
export class OptionalCountersService {
  public poisonCounterMenu: boolean[] = [false, false];
  public commanderCounterMenu: boolean[] = [false, false];
  public partnerCounterMenu: boolean[] = [false, false];
  public citiesBlessingToken: boolean[] = [false, false];
  public monarchToken: number = -1;
  public poisonCounter: number[] = [0, 0];
  public commanderCounter: number[] = [0, 0];
  public partnerCounter: number[] = [0, 0];

  public show(menu: number, playerIndex: number) {
    if (menu == 0)
      this.poisonCounterMenu[playerIndex] = !this.poisonCounterMenu[playerIndex];
    else
      this.commanderCounterMenu[playerIndex] = !this.commanderCounterMenu[playerIndex];
  }

  public isActive(playerIndex: number): boolean {
    return playerIndex != null && (this.poisonCounterMenu[playerIndex] || this.commanderCounterMenu[playerIndex]);
  }
}
