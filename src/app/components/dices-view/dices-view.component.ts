/**
 * Created by Soulbound Team on 13/04/17.
 */

import {Component} from "@angular/core";
import {DiceService} from "../../service/dice.service";

@Component({
  selector: 'dices-view',
  templateUrl: 'dices-view.html',
  styleUrls: ['dices-view.css']
})
export class DicesViewComponent {
  constructor(private diceService: DiceService) {
  }

  public close() {
    if (!this.diceService.launched)
      this.diceService.active = false;
  }
}
