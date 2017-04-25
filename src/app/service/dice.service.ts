/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Injectable} from "@angular/core";
import {Dice} from "../models/dice";
import {DiceWinnerState} from "../enums/dice-winner-state.enum";

@Injectable()
export class DiceService {
  public dices: Dice[];
  private _active: boolean = false;
  private _launched: boolean = false;

  constructor() {
    this.dices = [new Dice(), new Dice()];
  }

  public launchDices() {
    this.dices[0].winnerState = DiceWinnerState.INIT;
    this.dices[1].winnerState = DiceWinnerState.INIT;
    this._launched = true;
    this.launchDice(this.dices[0]);
    this.launchDice(this.dices[1]);
    this.delay(3000).then(() => this.calculateWinner());
  }

  private launchDice(dice: Dice) {
    this.active = true;
    if (this._launched) {
      dice.value = Math.floor(Math.random() * 6) + 1;

      this.delay(150 + Math.floor(Math.random() * 75))
        .then(() => {
          this.launchDice(dice);
        });
    }
  }

  private delay(milliseconds: number) {
    return new Promise<void>(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  private calculateWinner() {
    this._launched = false;
    this.delay(500).then(() => {
      if (this.dices[0].value > this.dices[1].value) {
        this.dices[0].winnerState = DiceWinnerState.WINNER;
        this.dices[1].winnerState = DiceWinnerState.LOSER;
      }
      else if (this.dices[0].value < this.dices[1].value) {
        this.dices[0].winnerState = DiceWinnerState.LOSER;
        this.dices[1].winnerState = DiceWinnerState.WINNER;
      }
      else {
        this.dices[0].winnerState = DiceWinnerState.TIE;
        this.dices[1].winnerState = DiceWinnerState.TIE;
      }
    });
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get launched(): boolean {
    return this._launched;
  }

  set launched(value: boolean) {
    this._launched = value;
  }
}
