/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";
import {LifeService} from "../../service/life.service";

@Component({
  selector: 'separator-life-range-menu',
  templateUrl: 'separator-life-range-menu.html',
  styleUrls: ['separator-life-range-menu.css']
})
export class SeparatorLifeRangeMenuComponent {
  constructor(private separatorMenuService: SeparatorMenuService,
              private lifeService: LifeService) {
  }

  public changeLifeRange(lifeRange: number) {
    this.separatorMenuService.lifeRange = lifeRange;
    this.separatorMenuService.state = SeparatorMenuState.MAIN_MENU;
    this.separatorMenuService.resetCounters();
  }
}
