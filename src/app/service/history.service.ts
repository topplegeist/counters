/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Injectable} from '@angular/core';
import {HistoryType} from '../enums/history-type.enum';
import {HistoryTimer} from '../timers/history-timer';

export type Operation = {
  playerIndex: number,
  lifeBefore: number,
  value: number
}

export type DiceRoll = {
  p1value: number,
  p2value: number,
  winnerIndex: number
}

export type HistoryEntry = {
  type: HistoryType,
  date: Date,
  data: DiceRoll | Operation
}

@Injectable()
export class HistoryService {
  public history: HistoryEntry[] = [];
  private timers: HistoryTimer[] = [];
  test: DiceRoll;

  constructor() {
    this.timers.push(new HistoryTimer(this.historyCallback));
    this.timers.push(new HistoryTimer(this.historyCallback));
  }

  public addOperation(type: HistoryType, operation: Operation): void {
    let newEntry = {
      type: type,
      date: new Date(),
      data: operation
    };
    this.timers[operation.playerIndex].addOperation(newEntry);
  }

  public addDiceRoll(diceRoll: DiceRoll): void {
    this.forceUpdate();
    let newEntry = {
      type: HistoryType.DICE,
      date: new Date(),
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
