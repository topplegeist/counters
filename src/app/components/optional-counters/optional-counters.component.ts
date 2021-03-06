/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, Input} from '@angular/core';
import {OptionalCountersService} from '../../service/optional-counters.service';
import {LifeService} from '../../service/life.service';
import {HUDService} from '../../service/hud.service';
import {HistoryService, Operation} from '../../service/history.service';
import {HistoryType} from '../../enums/history-type.enum';

@Component({
  selector: 'optional-counters',
  templateUrl: 'optional-counters.html',
  styleUrls: ['optional-counters.css']
})
export class OptionalCountersComponent {
  @Input()
  public playerIndex: number;

  private commanderTimer: any = null;

  private poisonTimer: any = null;

  private partnerTimer: any = null;

  private audio;

  constructor(public optionalCountersService: OptionalCountersService,
              public lifeService: LifeService,
              private historyService: HistoryService,
              public hudService: HUDService) {
    this.audio = new Audio('./assets/sounds/click.mp3');
  }

  public increasePoison() {
    if (this.optionalCountersService.poisonCounter[this.playerIndex] < 100) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.POISON, 1);
      this.optionalCountersService.poisonCounter[this.playerIndex]++;
    }
  }

  public increaseCommander() {
    if (this.optionalCountersService.commanderCounter[this.playerIndex] < 100) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.COMMANDER, 1);
      this.optionalCountersService.commanderCounter[this.playerIndex]++;
      this.lifeService.playersStats[this.playerIndex].life--;
    }
  }

  public increasePartner() {
    if (this.optionalCountersService.partnerCounter[this.playerIndex] < 100) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.PARTNER, 1);
      this.optionalCountersService.partnerCounter[this.playerIndex]++;
      this.lifeService.playersStats[this.playerIndex].life--;
    }
  }

  public decreasePoison() {
    if (this.optionalCountersService.poisonCounter[this.playerIndex] > 0) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.POISON, -1);
      this.optionalCountersService.poisonCounter[this.playerIndex]--;
    }
  }

  public decreaseCommander() {
    if (this.optionalCountersService.commanderCounter[this.playerIndex] > 0) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.COMMANDER, -1);
      this.optionalCountersService.commanderCounter[this.playerIndex]--;
      this.lifeService.playersStats[this.playerIndex].life++;
    }
  }

  public decreasePartner() {
    if (this.optionalCountersService.partnerCounter[this.playerIndex] > 0) {
      this.audio.play();
      this.addHistoryEntry(HistoryType.PARTNER, -1);
      this.optionalCountersService.partnerCounter[this.playerIndex]--;
      this.lifeService.playersStats[this.playerIndex].life++;
    }
  }

  public commanderCloseTimerStart() {
    if (this.commanderTimer)
      return;
    this.commanderTimer = setTimeout(() => {
      this.optionalCountersService.show(1, this.playerIndex);
    }, 350);
  }

  public partnerCloseTimerStart() {
    if (this.partnerTimer)
      return;
    this.partnerTimer = setTimeout(() => {
      this.optionalCountersService.show(2, this.playerIndex);
    }, 350);
  }

  public poisonCloseTimerStart() {
    if (this.poisonTimer)
      return;
    this.poisonTimer = setTimeout(() => {
      this.optionalCountersService.show(0, this.playerIndex);
    }, 350);
  }

  public commanderCloseTimerStop() {
    clearTimeout(this.commanderTimer);
    this.commanderTimer = null;
  }

  public partnerCloseTimerStop() {
    clearTimeout(this.partnerTimer);
    this.partnerTimer = null;
  }

  public poisonCloseTimerStop() {
    clearTimeout(this.poisonTimer);
    this.poisonTimer = null;
  }

  private addHistoryEntry(type: HistoryType, value: number) {
    let lifeBefore: number = type != HistoryType.POISON ?
      this.lifeService.playersStats[this.playerIndex].life :
      null;
    let operation: Operation = {
      playerIndex: this.playerIndex,
      lifeBefore: lifeBefore,
      value: value
    };
    this.historyService.addOperation(type, operation);
  }
}
