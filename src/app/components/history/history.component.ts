/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertComponent} from '../../commons/alert.component';
import {DiceRoll, HistoryEntry, HistoryService, Operation} from '../../service/history.service';
import {ButtonData} from '../../models/button-data.model';
import {HistoryType} from '../../enums/history-type.enum';

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.less']
})
export class HistoryComponent extends AlertComponent {
  @ViewChild('entryList', {static: true}) private entryList: ElementRef;
  historyType = HistoryType;

  constructor(public historyService: HistoryService) {
    super();
    historyService.forceUpdate();
  }

  save() {
  }

  reset() {
    this.historyService.clear();
  }

  cancel() {
  }

  public getButtons(): ButtonData[] {
    let button1 = new ButtonData();
    button1.label = 'Reset';
    button1.clazz = 'default';
    button1.callback = () => {
      this.reset();
    };

    let button2 = new ButtonData();
    button2.label = 'Close';
    button2.clazz = 'cancel';
    button2.callback = () => {
      super.close();
    };

    return [button1, button2];
  }

  public getOperator(operation: Operation): string {
    return operation.value >= 0 ? '+' : '-';
  }

  public getLifeBefore(operationEntry: HistoryEntry): number {
    let operation: Operation = <Operation>operationEntry.data;
    return operation.lifeBefore ? operation.lifeBefore : null;
  }

  public getLifeAfter(operationEntry: HistoryEntry): number {
    let operation: Operation = <Operation>operationEntry.data;
    if (!operation.lifeBefore) return null;

    let lifeAfter: number = operationEntry.type == HistoryType.COMMANDER || operationEntry.type == HistoryType.PARTNER ?
      (operation.lifeBefore - operation.value) :
      (operation.lifeBefore + operation.value);
    return lifeAfter;
  }

  public getValue(operation: Operation): number {
    return Math.abs(operation.value);
  }

  public getTime(date: Date): string {
    return date.toLocaleTimeString(undefined, {hour12: false});
  }

  public getDiceNote(diceRoll: DiceRoll): string {
    return diceRoll.p1value == diceRoll.p2value ?
      ('drew:') :
      ('P' + (diceRoll.winnerIndex + 1) + ' won:');
  }

  public getDiceResult(diceRoll: DiceRoll): string {
    return diceRoll.p1value + ' - ' + diceRoll.p2value;
  }
}
