/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";

@Component({
  selector: 'separator-menu-button',
  templateUrl: 'separator-menu-button.html',
  styleUrls: ['separator-menu-button.css']
})
export class SeparatorMenuButtonComponent {
  constructor(private separatorMenuService: SeparatorMenuService) {
  }

  public toggleMenu() {
    if (this.separatorMenuService.state == SeparatorMenuState.CLOSED)
      this.separatorMenuService.state = SeparatorMenuState.MAIN_MENU;
    else
      this.separatorMenuService.state = SeparatorMenuState.CLOSED;
  }
}
