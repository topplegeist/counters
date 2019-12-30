/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from '@angular/core';
import {LifeService} from '../../service/life.service';
import {HUDService} from '../../service/hud.service';
import {DiceRoll, HistoryService, Operation} from '../../service/history.service';
import {HistoryType} from '../../enums/history-type.enum';

@Component({
  selector: 'hud-interaction-layer',
  templateUrl: 'hud-interaction-layer.html',
  styleUrls: ['hud-interaction-layer.css']
})
export class HudInteractionLayerComponent {
  @Input()
  public playerIndex: number;
  private audio = new Audio('./assets/sounds/click.mp3');

  constructor(
    private lifeService: LifeService,
    private historyService: HistoryService,
    public hudService: HUDService) {
  }

  public leftClick() {
    this.addHistoryEntry(-1);
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life - 1;
    this.audio.play();
  }

  public rightClick() {
    this.addHistoryEntry(1);
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life + 1;
    this.audio.play();
  }

  public leftClickFast() {
    this.addHistoryEntry(-5);
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life - 5;
    this.audio.play();
  }

  public rightClickFast() {
    this.addHistoryEntry(5);
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life + 5;
    this.audio.play();
  }

  private addHistoryEntry(value: number) {
    let operation: Operation = {
      playerIndex: this.playerIndex,
      lifeBefore: this.lifeService.playersStats[this.playerIndex].life,
      value: value
    };
    this.historyService.addOperation(HistoryType.LIFE, operation);
  }
}
