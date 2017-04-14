/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import "hammerjs";

@Component({
  selector: 'background-slider',
  templateUrl: 'background-slider.html',
  styleUrls: ['background-slider.css']
})
export class BackgroundSliderComponent implements OnInit {
  private transitionEnd: string = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

  @ViewChild("container")
  private $container: ElementRef;

  private paneWidth: number;
  private paneCount;
  private panBoundary;
  private currentPane: number;

  private setPaneSize() {
  }

  constructor() {
    this.paneWidth = 0;
    this.paneCount = 4;
    this.panBoundary = .25; // if the pane is paned .25, switch to the next pane.
    this.currentPane = 0;
  }

  ngOnInit() {
    this.setPaneSize();
    this.showPane(0);
  }

  private showPane(index) {
    this.currentPane = Math.max(0, Math.min(index, this.paneCount - 1));
    this.setContainerOffsetX(-this.currentPane * this.paneWidth, true);
  }

  private setContainerOffsetX(offsetX, doTransition?) {
    /*if (doTransition) {
      console.log(this.$container);
      this.$container.nativeElement
        .addClass('transition')
        .one(this.transitionEnd, function () {
          this.$container.removeClass('transition');
        })
    }*/
    this.$container.nativeElement.style.left = offsetX+"px";
  }

  private next() {
    this.showPane(++this.currentPane);
  }

  private prev() {
    this.showPane(--this.currentPane);
  }

  public handleHammer(e) {
    switch (e.type) {
      case 'panleft':
      case 'panright':
      case 'panend':
      case 'pancancel':
        this.handlePan(e);
        break;
    }
  }

  private outOfBound() {
    let left = this.$container.nativeElement.offsetLeft;
    return (this.currentPane == 0 && left >= 0) ||
      (this.currentPane == this.paneCount - 1 && left <= -this.paneWidth * (this.paneCount - 1));
  }

  private handlePan(e) {
    switch (e.type) {
      case 'panleft':
      case 'panright':
        // Slow down at the first and last pane.
        if (this.outOfBound()) {
          e.deltaX *= .2;
        }
        this.setContainerOffsetX(-this.currentPane * this.paneWidth + e.deltaX);
        console.log(-this.currentPane * this.paneWidth + e.deltaX);
        break;
      case 'panend':
      case 'pancancel':
        if (Math.abs(e.deltaX) > this.paneWidth * this.panBoundary) {
          if (e.deltaX > 0) {
            this.prev();
          } else {
            this.next();
          }
        } else {
          this.showPane(this.currentPane);
        }
        break;
    }
  }
}
