/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlertComponent} from '../../commons/alert.component';
import {HistoryService} from '../../service/history.service';
import {ButtonData} from '../../models/button-data.model';

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.less']
})
export class HistoryComponent extends AlertComponent implements OnInit {
  @ViewChild('entryList', {static: true}) private entryList: ElementRef;

  constructor(public historyService: HistoryService) {
    super();
  }

  ngOnInit(): void {
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

  public getOperator(value: number) {
    return value >= 0 ? '+' : '-';
  }

  public getValue(value: number) {
    return Math.abs(value);
  }

  public getTime(date: Date): string {
    // TODO: scroll hack; find a better way to scroll the list to the bottom.
    this.scrollToBottom();
    return date.toLocaleTimeString(undefined, {hour12: false});
  }

  private scrollToBottom() {
    this.entryList.nativeElement.scrollTop = this.entryList.nativeElement.scrollHeight;
  }
}
