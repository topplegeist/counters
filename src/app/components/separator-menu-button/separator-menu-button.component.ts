/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";

@Component({
  selector: 'separator-menu-button',
  templateUrl: 'separator-menu-button.html',
  styleUrls: ['separator-menu-button.css']
})
export class SeparatorMenuButtonComponent {
  constructor(private separatorMenuService: SeparatorMenuService) {
  }

  public toggleMenu() {
    this.separatorMenuService.state = !this.separatorMenuService.state
  }
}
