/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";

@Component({
  selector: 'separator-menu',
  templateUrl: 'separator-menu.html',
  styleUrls: ['separator-menu.css'],
})
export class SeparatorMenuComponent {
  constructor(public separatorMenuService: SeparatorMenuService) {
  }
}
