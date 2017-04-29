/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";
import {LifeService} from "../../service/life.service";
import {PlayerStats} from "../../models/player-stats.model";

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
    let resetAfterLifeRangeChanged: boolean = (
      this.lifeService.playersStats
        .map((ps: PlayerStats) => ps.life)
        .filter((life: number) => life != this.separatorMenuService.lifeRange)
        .length == 0
    );
    this.separatorMenuService.lifeRange = lifeRange;
    this.separatorMenuService.state = SeparatorMenuState.MAIN_MENU;
    if (resetAfterLifeRangeChanged)
      this.separatorMenuService.resetLives();
  }
}
