/**
 * Created by Soulbound Team on 17/04/2017.
 */

import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'separator-inner-menu-button',
  templateUrl: 'separator-inner-menu-button.html',
  styleUrls: ['separator-inner-menu-button.css']
})
export class SeparatorInnerMenuButtonComponent implements OnInit {
  @Input()
  public iconType: string;

  public classObj: any;

  ngOnInit(): void {
    this.classObj = [
      'icon', this.iconType
    ];
  }

}
