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
      for(let cacheEntry in this.cacheEntries) {
        if (this.cacheEntries[cacheEntry]) this.historyCallback(this.cacheEntries[cacheEntry]);
      }
      this.cacheEntries = [];
    }, interval);
    this.historyCallback = historyCallback;
  }

  public addEntry(entry: HistoryEntry): void {
    if (!this.cacheEntries[entry.type]) {
      this.cacheEntries[entry.type] = entry;
    }
    else this.updateEntry(entry);
    this.restart();
  };

  private updateEntry(entry: HistoryEntry): void {
    if (this.cacheEntries[entry.type].type == entry.type) {
      this.cacheEntries[entry.type].date = entry.date;
      this.cacheEntries[entry.type].data += entry.data;
      if (this.cacheEntries[entry.type].data == 0) this.cacheEntries = null;
    }
  }
}
