/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Injectable} from '@angular/core';
import {HistoryType} from '../enums/history-type.enum';
import {HistoryTimer} from '../timers/history-timer';

export type DiceRoll = {
  p1value: number,
  p2value: number,
  winnerIndex: number
}

export type HistoryEntry = {
  type: HistoryType,
  date: Date,
  playerIndex: number,
  data: number | DiceRoll
}

@Injectable()
export class HistoryService {
  public history: HistoryEntry[] = [];
  private timers: HistoryTimer[] = [];

  constructor() {
    this.timers.push(new HistoryTimer(this.historyCallback));
    this.timers.push(new HistoryTimer(this.historyCallback));
  }

  public addOperatorEntry(type: HistoryType, playerIndex: number, value: number): void {
    let newEntry = {
      type: type,
      date: new Date(),
      playerIndex: playerIndex,
      data: value
    };
    this.timers[playerIndex].addEntry(newEntry);
  }

  public addDiceRoll(diceRoll: DiceRoll): void {
    this.forceUpdate();
    let newEntry = {
      type: HistoryType.DICE,
      date: new Date(),
      playerIndex: null,
      data: diceRoll
    };
    this.pushNewEntry(newEntry);
  }

  private pushNewEntry(newEntry: HistoryEntry): void {
    this.history = [newEntry, ...this.history];
  }

  public clear(): void {
    this.history = [];
  }

  historyCallback = (newEntry: HistoryEntry): void => {
    this.pushNewEntry(newEntry);
  };

  public forceUpdate(): void {
    this.timers.forEach(timer => timer.forceUpdate());
  }
}
