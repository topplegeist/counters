/**
 * Created by Soulbound Team on 17/04/2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuInnerButtonType} from "./separator-menu-inner-button-type.enum";

@Component({
  selector: 'separator-inner-menu-button',
  templateUrl: 'separator-inner-menu-button.html',
  styleUrls: ['separator-inner-menu-button.css']
})
export class SeparatorInnerMenuButtonComponent implements OnInit {
  @Input()
  public iconType: SeparatorMenuInnerButtonType;

  public classObj: any;

  constructor(private separatorMenuService: SeparatorMenuService) {
  }

  ngOnInit(): void {
    this.classObj = [
      'icon', SeparatorMenuInnerButtonType[this.iconType]
    ];
  }

  public doButtonAction() {
    switch (this.iconType) {
      case SeparatorMenuInnerButtonType.dices:
      case SeparatorMenuInnerButtonType.lifeRange:
      case SeparatorMenuInnerButtonType.settings:
        // TODO:
        break;
      case SeparatorMenuInnerButtonType.reset:
        this.separatorMenuService.resetLives();
        break;
    }
  }
}
