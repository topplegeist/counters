/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuInnerButtonType} from "../../enums/separator-menu-inner-button-type.enum";

@Component({
  selector: 'separator-inner-menu',
  templateUrl: 'separator-inner-menu.html',
  styleUrls: ['separator-inner-menu.css']
})
export class SeparatorInnerMenuComponent {
  public separatorMenuInnerButtonType = SeparatorMenuInnerButtonType;
}
