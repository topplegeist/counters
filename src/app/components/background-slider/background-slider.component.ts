/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {HummerSliderComponent} from "../../commons/hummer-slider.component";

@Component({
  selector: 'background-slider',
  templateUrl: 'background-slider.html',
  styleUrls: ['background-slider.css']
  //TODO: waiting for angular2 variables animations
})
export class BackgroundSliderComponent extends HummerSliderComponent implements AfterViewInit {
  @ViewChild("container")
  public slidingContainer: ElementRef;

  @ViewChild("carousel")
  public carousel: ElementRef;

  public panels: ElementRef[];

  @Input()
  public reversed: boolean;

  @Input()
  public initPanelNumber: number = 0;

  public offset: number = 0;

  @ViewChildren("panel1,panel2,panel3,panel4,panel5")
  protected panelsQueryList: QueryList<ElementRef>;

  public transition: boolean = false;

  public ngAfterViewInit(): void {
    this.panels = this.panelsQueryList.toArray();
    this.init(this.initPanelNumber);
    this.offsetSlided.subscribe((value: number) => this.offset = value);
    this.offsetSet.subscribe((value: number) => {
      this.transition = true;
      this.offset = value;
    });
  }

  public transitionDone() {
    this.transition = false;
  }

  public getLeft(): string {
    return this.offset + 'px';
  }
}
