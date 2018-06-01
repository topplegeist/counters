/**
 * Created by Topplegeist Team on 13/04/17.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";
import {DiceService} from "../../service/dice.service";

@Component({
  selector: 'main-view',
  templateUrl: 'main-view.html',
  styleUrls: ['main-view.css']
})
export class MainViewComponent {
  public separatorMenuOpened: boolean;

  constructor(separatorMenuService: SeparatorMenuService,
              public diceService: DiceService) {
    separatorMenuService.menuStateChanged.subscribe((state: SeparatorMenuState) => {
      this.separatorMenuOpened = state != SeparatorMenuState.CLOSED;
    })
  }
}
