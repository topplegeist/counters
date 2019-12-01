/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Injectable} from '@angular/core';
import {HistoryType} from '../enums/history-type.enum';
import {HistoryTimer} from '../timers/history-timer';

export type HistoryEntry = {
  type: HistoryType,
  date: Date,
  playerIndex: number,
  data: any
}

@Injectable()
export class HistoryService {
  public history: HistoryEntry[] = [];
  private timers: HistoryTimer[] = [];

  constructor() {
    this.timers.push(new HistoryTimer(this.historyCallback));
    this.timers.push(new HistoryTimer(this.historyCallback));
  }

  public addHistoryEntry(type: HistoryType, playerIndex: number, value: number) {
    let newEntry = {
      type: type,
      date: new Date(),
      playerIndex: playerIndex,
      data: value
    };
    this.timers[playerIndex].addEntry(newEntry);
  }

  clear() {
    this.history = [];
  }

  historyCallback = (newEntry: HistoryEntry) => {
    this.history.push(newEntry);
  };

  forceUpdate() {
    this.timers.forEach(timer => timer.forceUpdate());
  }
}
