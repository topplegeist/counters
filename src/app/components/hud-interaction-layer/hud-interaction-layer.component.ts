/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from '@angular/core';
import {LifeService} from '../../service/life.service';
import {HUDService} from '../../service/hud.service';
import {HistoryService} from '../../service/history.service';
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
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life - 1;
    this.addHistoryEntry('-1');
    this.audio.play();
  }

  public rightClick() {
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life + 1;
    this.addHistoryEntry('+1');
    this.audio.play();
  }

  public leftClickFast() {
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life - 5;
    this.addHistoryEntry('-5');
    this.audio.play();
  }

  public rightClickFast() {
    this.lifeService.playersStats[this.playerIndex].life = this.lifeService.playersStats[this.playerIndex].life + 5;
    this.addHistoryEntry('+5');
    this.audio.play();
  }

  private addHistoryEntry(note: string) {
    this.historyService.addHistoryEntry(HistoryType.LIFE, this.playerIndex, note);
  }
}
