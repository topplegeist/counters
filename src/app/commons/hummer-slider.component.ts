/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {ElementRef, EventEmitter} from "@angular/core";
import * as $ from "jquery";
import "hammerjs";

export abstract class HummerSliderComponent {
  private panelWidth: number;
  private currentPanel: number = 0;

  abstract carousel: ElementRef;
  abstract slidingContainer: ElementRef;
  abstract panels: ElementRef[];
  abstract reversed: boolean;

  private _internalOffset: number = 0;
  public offsetSlided: EventEmitter<number> = new EventEmitter();
  public offsetSet: EventEmitter<number> = new EventEmitter();

  protected panBoundary: number = .25;

  protected init(startingPanel: number = 0) {
    this.panelWidth = $(this.carousel.nativeElement).width();
    $(this.slidingContainer.nativeElement).width(this.panelWidth * this.panels.length);
    this.panels.forEach((p: ElementRef) => $(p.nativeElement).width(this.panelWidth));
    this.slideToPanel(startingPanel);
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

  public mouseDragged(deltaX: number) {
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
