/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {ElementRef} from "@angular/core";
import * as $ from "jquery";
import "hammerjs";

export abstract class HummerSliderComponent {
  private panelWidth: number;
  private currentPane: number = 0;

  abstract carousel: ElementRef;
  abstract slidingContainer: ElementRef;
  abstract panels: ElementRef[];

  protected panBoundary: number = .25;

  protected init(startingPanel: number = 0) {
    this.panelWidth = $(this.carousel.nativeElement).width();
    $(this.slidingContainer.nativeElement).width(this.panelWidth * this.panels.length);
    this.panels.forEach((p: ElementRef) => $(p.nativeElement).width(this.panelWidth));
    this.slideToPanel(startingPanel);
  }

  private slideToPanel(index: number) {
    this.currentPane = Math.max(0, Math.min(index, this.panels.length - 1));
    this.setContainerOffsetX(-this.currentPane * this.panelWidth);
  }

  private next() {
    this.slideToPanel(++this.currentPane);
  }

  private prev() {
    this.slideToPanel(--this.currentPane);
  }

  public mouseDragged(deltaX: number) {
    deltaX = this.slowDownScroll(deltaX);
    this.setContainerOffsetX(-this.currentPane * this.panelWidth + deltaX);
  }

  public mouseDropped(deltaX: number) {
    if (Math.abs(deltaX) > this.panelWidth * this.panBoundary) {
      if (deltaX > 0)
        this.prev();
      else
        this.next();
    } else
      this.resetPosition();
  }

  private slowDownScroll(deltaX: number): number {
    if (this.outOfBound())
      deltaX *= .2;
    return deltaX;
  }

  private resetPosition() {
    this.slideToPanel(this.currentPane);
  }

  private setContainerOffsetX(offsetX: number) {
    this.slidingContainer.nativeElement.style.left = offsetX + "px";
  }

  private outOfBound(): boolean {
    let left: number = $(this.slidingContainer.nativeElement).position().left;
    return (this.currentPane == 0 && left >= 0) ||
      (this.currentPane == this.panels.length - 1 && left <= -this.panelWidth * (this.panels.length - 1));
  }
}
