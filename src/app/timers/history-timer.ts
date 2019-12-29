/**
 * Created by Topplegeist Team on 01/12/2019.
 */

import {Timer} from './timer';
import {HistoryEntry} from '../service/history.service';

export interface CacheEntry {
  [details: string]: HistoryEntry;
}

export class HistoryTimer extends Timer {
  private historyCallback: Function;
  private cacheEntries: CacheEntry[] = [];

  constructor(historyCallback: Function, interval: number = 1000) {
    super(() => {
      this.forceUpdate();
    }, interval);
    this.historyCallback = historyCallback;
  }

  public addOperation(entry: HistoryEntry): void {
    if (!this.cacheEntries[entry.type]) {
      this.cacheEntries[entry.type] = entry;
    }
    else this.updateOperation(entry);
    this.restart();
  };

  private updateOperation(entry: HistoryEntry): void {
    if (this.cacheEntries[entry.type].type == entry.type) {
      this.cacheEntries[entry.type].date = entry.date;
      this.cacheEntries[entry.type].data.value += entry.data['value'];
      if (this.cacheEntries[entry.type].data == 0) this.cacheEntries = null;
    }
  }

  public forceUpdate() {
    this.stop();
    for(let cacheEntry in this.cacheEntries) {
      if (this.cacheEntries[cacheEntry]) this.historyCallback(this.cacheEntries[cacheEntry]);
    }
    this.cacheEntries = [];
  }
}
