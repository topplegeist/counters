/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {OptionalCountersService} from "../../service/optional-counters.service";
import {LifeService} from "../../service/life.service";

@Component({
  selector: 'optional-counters',
  templateUrl: 'optional-counters.html',
  styleUrls: ['optional-counters.css']
})
export class OptionalCountersComponent {
  @Input()
  public playerIndex: number;

  private noCommanderTimer: any;

  private noPoisonTimer: any;

  private audio;

  constructor(public optionalCountersService: OptionalCountersService, public lifeService: LifeService) {
    this.audio = new Audio('./assets/sounds/click.mp3');
  }

  public increasePoison() {
    if (this.optionalCountersService.poisonCounter[this.playerIndex] < 100) {
      this.audio.play();
      this.optionalCountersService.poisonCounter[this.playerIndex]++;
    }
  }

  public increaseCommander() {
    if (this.optionalCountersService.commanderCounter[this.playerIndex] < 100) {
      this.audio.play();
      this.optionalCountersService.commanderCounter[this.playerIndex]++;
      this.lifeService.playersStats[this.playerIndex].life--;
    }
  }

  public decreasePoison() {
    if (this.optionalCountersService.poisonCounter[this.playerIndex] > 0) {
      this.audio.play();
      this.optionalCountersService.poisonCounter[this.playerIndex]--;
    }
  }

  public decreaseCommander() {
    if (this.optionalCountersService.commanderCounter[this.playerIndex] > 0) {
      this.audio.play();
      this.optionalCountersService.commanderCounter[this.playerIndex]--;
      this.lifeService.playersStats[this.playerIndex].life++;
    }
  }

  public noCommanderStart() {
    this.noCommanderTimer = setTimeout(() => {
      this.optionalCountersService.show(1, this.playerIndex);
    }, 700);
  }

  public noPoisonStart() {
    this.noPoisonTimer = setTimeout(() => {
      this.optionalCountersService.show(0, this.playerIndex);
    }, 700);
  }

  public noCommanderStop() {
    clearTimeout(this.noCommanderTimer);
  }

  public noPoisonStop() {
    clearTimeout(this.noPoisonTimer);
  }
}
