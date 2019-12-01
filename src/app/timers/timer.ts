/**
 * Created by Topplegeist Team on 01/12/2019.
 */

export class Timer {
  callback: Function;
  timerId: number = null;
  interval: number;
  running: boolean = false;

  constructor(callback: Function, interval: number = 1000) {
    this.callback = callback;
    this.interval = interval;
  }

  public start(): void {
    this.running = true;
    this.timerId = setTimeout(this.onTimeout, this.interval);
  }

  public stop(): void {
    this.running = false;
    clearTimeout(this.timerId);
  }

  public restart(): void {
    this.stop();
    this.start();
  }

  onTimeout = () => {
    this.callback();
    this.running = false;
  }
}
