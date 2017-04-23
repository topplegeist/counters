/**
 * Created by Soulbound Team on 13/04/17.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";

@Component({
  selector: 'main-view',
  templateUrl: 'main-view.html',
  styleUrls: ['main-view.css']
})
export class MainViewComponent {
  private separatorMenuOpened: boolean;

  constructor(separatorMenuService: SeparatorMenuService) {
    separatorMenuService.menuStateChanged.subscribe((state: SeparatorMenuState) => {
      this.separatorMenuOpened = state != SeparatorMenuState.CLOSED;
    })
  }
}
