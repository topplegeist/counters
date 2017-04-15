/**
 * Created by Soulbound Team on 13/04/17.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";

@Component({
  selector: 'main-view',
  templateUrl: 'main-view.html',
  styleUrls: ['main-view.css']
})
export class MainViewComponent {
  public separatorMenuOpened: boolean = false;

  constructor(separatorMenuService: SeparatorMenuService) {
    separatorMenuService.menuStateChanged.subscribe((state: boolean) => {
      this.separatorMenuOpened = state;
    })
  }
}
