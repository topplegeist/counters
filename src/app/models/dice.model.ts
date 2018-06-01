/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {DiceWinnerState} from "../enums/dice-winner-state.enum";

export class Dice {
  private _value: number = 0;
  private _winnerState: DiceWinnerState = DiceWinnerState.INIT;

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get winnerState(): DiceWinnerState {
    return this._winnerState;
  }

  set winnerState(value: DiceWinnerState) {
    this._winnerState = value;
  }
}
