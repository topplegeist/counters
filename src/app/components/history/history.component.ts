/**
 * Created by Topplegeist Team on 29/11/2019.
 */

import {Component, OnInit} from '@angular/core';
import {AlertComponent} from '../../commons/alert.component';
import {HistoryService} from '../../service/history.service';

@Component({
  selector: 'history',
  templateUrl: 'history.component.html',
  styleUrls: ['history.component.less']
})
export class HistoryComponent extends AlertComponent implements OnInit {
  constructor(public historyService: HistoryService) {
    super();
  }

  ngOnInit(): void {
  }

  save() {
  }

  cancel() {
  }

  public getTime(date: Date): string { // unused
    return date.getHours() + ':' +
      date.getMinutes() + ':' +
      date.getSeconds();
  }
}
