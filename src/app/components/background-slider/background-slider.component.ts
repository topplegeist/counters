/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from "@angular/core";
import {HummerSliderComponent} from "../../commons/hummer-slider.component";

@Component({
  selector: 'background-slider',
  templateUrl: 'background-slider.html',
  styleUrls: ['background-slider.css']
  //TODO: Animations
})
export class BackgroundSliderComponent extends HummerSliderComponent implements AfterViewInit {
  @ViewChild("container")
  public slidingContainer: ElementRef;

  @ViewChild("carousel")
  public carousel: ElementRef;

  public panels: ElementRef[];

  @ViewChildren("panel1,panel2,panel3,panel4,panel5")
  protected panelsQueryList: QueryList<ElementRef>;

  public ngAfterViewInit(): void {
    this.panels = this.panelsQueryList.toArray();
    console.log(this.panels.length);
    this.init(0);
  }
}
