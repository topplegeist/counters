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
    this.addHistoryEntry(HistoryType.LIFE, 1, "note 1"); // TODO: remove dummy content
    this.addHistoryEntry(HistoryType.POISON, 2, "note 2");
  }

  public addHistoryEntry(type: HistoryType, playerIndex: number, message: string) {
    this.history.push({
      type: type,
      date: new Date(),
      playerIndex: playerIndex,
      note: message
    });
  }
}
