/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {LifeService} from "../../service/life.service";

@Component({
  selector: 'hud-interaction-layer',
  templateUrl: 'hud-interaction-layer.html',
  styleUrls: ['hud-interaction-layer.css']
})
export class HudInteractionLayerComponent {
  @Input()
  private playerIndex: number;

  constructor(private lifeService: LifeService) {
  }

  public leftClick() {
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life - 1;
    let audio = new Audio('./assets/sounds/click.mp3');
    audio.play();
  }

  public rightClick() {
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life + 1;
    let audio = new Audio('./assets/sounds/click.mp3');
    audio.play();
  }
}
