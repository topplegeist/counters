/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {DiceService} from "../../service/dice.service";

@Component({
  selector: 'player-field',
  templateUrl: 'player-field.html',
  styleUrls: ['player-field.css']
})
export class PlayerFieldComponent {
  @Input()
  public inverted: boolean = false;

  @Input()
  public playerIndex: number = 0;


  constructor(public diceService: DiceService) {
  }
}
