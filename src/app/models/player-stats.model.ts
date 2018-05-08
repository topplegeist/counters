/**
 * Created by Topplegeist Team on 13/04/2017.
 */

export class PlayerStats {
  private _life: number = 20;

  get life(): number {
    return this._life;
  }

  set life(value: number) {
    this._life = value;
  }
}
