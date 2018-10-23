/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {OptionalCountersService} from "../../service/optional-counters.service";
import {LifeService} from "../../service/life.service";

@Component({
  selector: 'top-icons',
  templateUrl: 'top-icons.html',
  styleUrls: ['top-icons.css']
})
export class TopIconsComponent {
  @Input()
  public playerIndex: number;

  private monarchTimer: any = null;

  private citiesBlessingTimer: any = null;

  private audio;

  constructor(public optionalCountersService: OptionalCountersService,
              public lifeService: LifeService) {
    this.audio = new Audio('./assets/sounds/click.mp3');
  }

  public monarchCloseTimerStart() {
    if (this.monarchTimer)
      return;
    this.monarchTimer = setTimeout(() => {
      this.optionalCountersService.show(3, this.playerIndex);
    }, 350);
  }

  public citiesBlessingCloseTimerStart() {
    if (this.citiesBlessingTimer)
      return;
    this.citiesBlessingTimer = setTimeout(() => {
      this.optionalCountersService.show(4, this.playerIndex);
    }, 350);
  }

  public monarchCloseTimerStop() {
    clearTimeout(this.monarchTimer);
    this.monarchTimer = null;
  }

  public citiesBlessingCloseTimerStop() {
    clearTimeout(this.citiesBlessingTimer);
    this.citiesBlessingTimer = null;
  }
}
