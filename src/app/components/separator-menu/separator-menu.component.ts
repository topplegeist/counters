/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";

@Component({
  selector: 'separator-menu',
  templateUrl: 'separator-menu.html',
  styleUrls: ['separator-menu.css'],
})
export class SeparatorMenuComponent {
  public separatorMenuState = SeparatorMenuState;

  constructor(public separatorMenuService: SeparatorMenuService) {
  }
}
