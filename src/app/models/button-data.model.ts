/**
 * Created by Soulbound Team on 29/04/2017.
 */

export class ButtonData {
  private _label: string;
  private _clazz: string;
  private _callback: Function;

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get clazz(): string {
    return this._clazz;
  }

  set clazz(value: string) {
    this._clazz = value;
  }

  get callback(): Function {
    return this._callback;
  }

  set callback(value: Function) {
    this._callback = value;
  }
}
