/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Injectable} from '@angular/core';
import {Dice} from '../models/dice.model';
import {DiceWinnerState} from '../enums/dice-winner-state.enum';
import {DiceRoll, HistoryService} from './history.service';
import {HistoryType} from '../enums/history-type.enum';

@Injectable()
export class DiceService {
  public dices: Dice[];
  private _active: boolean = false;
  private _launched: boolean = false;
  private audio;

  constructor(private historyService: HistoryService) {
    this.dices = [new Dice(), new Dice()];
    this.audio = new Audio('./assets/sounds/click.mp3');
  }

  public launchDices() {
    this.dices[0].winnerState = DiceWinnerState.INIT;
    this.dices[1].winnerState = DiceWinnerState.INIT;
    this._launched = true;
    this.launchDice(this.dices[0]);
    this.launchDice(this.dices[1]);
    this.delay(1500).then(() => this.calculateWinner());
  }

  private launchDice(dice: Dice) {
    this.audio.play();
    this.active = true;
    if (this._launched) {
      dice.value = Math.floor(Math.random() * 6) + 1;

      this.delay(125 + Math.floor(Math.random() * 0))
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
    this.delay(250).then(() => {
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
      let winnerIndex: number = this.dices[0].value != this.dices[1].value ?
        (this.dices[0].value > this.dices[1].value ? 0 : 1) :
        null;
      let diceRoll: DiceRoll = {
        p1value: this.dices[0].value,
        p2value: this.dices[1].value,
        winnerIndex: winnerIndex
      };
      this.historyService.addDiceRoll(diceRoll);
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
