/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Injectable} from '@angular/core';
import {HistoryType} from '../enums/history-type.enum';

export type HistoryEntry = {
  type: HistoryType,
  date: Date,
  playerIndex: number,
  note: string
}

@Injectable()
export class HistoryService {
  public history: HistoryEntry[] = [];

  constructor() {
  }

  public addHistoryEntry(type: HistoryType, playerIndex: number, note: string) {
    this.history.push({
      type: type,
      date: new Date(),
      playerIndex: playerIndex,
      note: note
    });
  }

  clear() {
    this.history = [];
  }
}
