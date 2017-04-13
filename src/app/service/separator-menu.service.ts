/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SeparatorMenuService {
  private _state: boolean = false;
  public menuStateChanged: EventEmitter<boolean> = new EventEmitter();

  get state(): boolean {
    return this._state;
  }
  set state(value: boolean) {
    this._state = value;
    this.menuStateChanged.next(this._state);
  }
}
