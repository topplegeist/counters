/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {DiceService} from "../../service/dice.service";
import {DiceWinnerState} from "../../enums/dice-winner-state.enum";

@Component({
  selector: 'dice-field',
  templateUrl: 'dice-field.html',
  styleUrls: ['dice-field.css']
})
export class DiceFieldComponent {
  @Input()
  public inverted: boolean = false;

  @Input()
  public playerIndex: number = 0;

  private _classObj: any = {};

  constructor(public diceService: DiceService) {
  }

  get classObj(): any {
    switch (this.diceService.dices[this.playerIndex].value) {
      case 1:
        return {'dice': true, 'one': true};
      case 2:
        return {'dice': true, 'two': true};
      case 3:
        return {'dice': true, 'three': true};
      case 4:
        return {'dice': true, 'four': true};
      case 5:
        return {'dice': true, 'five': true};
      case 6:
        return {'dice': true, 'six': true};
    }
  }

  get winnerLabel(): string {
    switch (this.diceService.dices[this.playerIndex].winnerState) {
      case DiceWinnerState.WINNER:
        return "Winner!";
      case DiceWinnerState.TIE:
        return "Tie";
      case DiceWinnerState.INIT:
      case DiceWinnerState.LOSER:
      default:
        return "";
    }
  }
}
