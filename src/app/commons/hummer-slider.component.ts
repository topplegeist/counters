/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {ElementRef, EventEmitter} from "@angular/core";
import * as $ from "jquery";
import "hammerjs";

export abstract class HummerSliderComponent {
  abstract carousel: ElementRef;
  abstract slidingContainer: ElementRef;
  abstract panels: ElementRef[];
  abstract reversed: boolean;
  public offsetSlided: EventEmitter<number> = new EventEmitter();
  public offsetSet: EventEmitter<number> = new EventEmitter();
  public noSlidingLongPress: EventEmitter<number> = new EventEmitter();
  protected panBoundary: number = .25;
  private panelWidth: number;
  private currentPanel: number = 0;
  private noSlidingTimer: any = null;
  private _internalOffset: number = 0;

  public tapStart(event: TouchEvent) {
    let menu: number;

    if (this.noSlidingTimer)
      return;
    if (this.reversed)
      menu = (event.touches[0].clientX < this.panelWidth / 2) ? 1 : 0;
    else
      menu = (event.touches[0].clientX < this.panelWidth / 2) ? 0 : 1;
    this.noSlidingTimer = setTimeout(() => {
      this.noSlidingTimer = null;
      this.noSlidingLongPress.emit(menu);
    }, 350);
  }

  public tapEnd() {
    clearTimeout(this.noSlidingTimer);
    this.noSlidingTimer = null;
  }

  public mouseDragged(deltaX: number) {
    this.tapEnd();
    if (this.reversed)
      deltaX = -deltaX;
    deltaX = this.slowDownScroll(deltaX);
    this.setContainerOffsetX(-this.currentPanel * this.panelWidth + deltaX);
    this.offsetSlided.next(this._internalOffset);
  }

  public mouseDropped(deltaX: number) {
    if (this.reversed)
      deltaX = -deltaX;
    if (Math.abs(deltaX) > this.panelWidth * this.panBoundary) {
      if (deltaX > 0)
        this.prev();
      else
        this.next();
    } else
      this.resetPosition();
    this.offsetSet.next(this._internalOffset);
  }

  protected init(startingPanel: number = 0) {
    this.panelWidth = $(this.carousel.nativeElement).width();
    $(this.slidingContainer.nativeElement).width(this.panelWidth * this.panels.length);
    this.panels.forEach((p: ElementRef) => $(p.nativeElement).width(this.panelWidth));
    this.slideToPanel(startingPanel);
    this.offsetSet.next(this._internalOffset);
  }

  private slideToPanel(index: number) {
    this.currentPanel = Math.max(0, Math.min(index, this.panels.length - 1));
    if (this._internalOffset != -this.currentPanel * this.panelWidth) {
      this.setContainerOffsetX(-this.currentPanel * this.panelWidth);
    }
  }

  private next() {
    this.slideToPanel(++this.currentPanel);
  }

  private prev() {
    this.slideToPanel(--this.currentPanel);
  }

  private slowDownScroll(deltaX: number): number {
    if (this.outOfBound())
      deltaX *= .15;
    return deltaX;
  }

  private resetPosition() {
    this.slideToPanel(this.currentPanel);
  }

  private setContainerOffsetX(offsetX: number) {
    this._internalOffset = offsetX;
  }

  private outOfBound(): boolean {
    let rightMargin: number = -this.panelWidth * (this.panels.length - 1);

    if (this.reversed)
      this._internalOffset = -$(this.carousel.nativeElement).width() + this.panelWidth + this._internalOffset;

    return (this.currentPanel == 0 && this._internalOffset >= 0) ||
      (this.currentPanel == this.panels.length - 1 && this._internalOffset <= rightMargin);
  }
}
