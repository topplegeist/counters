/**
 * Created by Topplegeist Team on 17/04/2017.
 */

import {Component, Input, OnInit} from "@angular/core";
import {SeparatorMenuService} from "../../service/separator-menu.service";
import {SeparatorMenuInnerButtonType} from "../../enums/separator-menu-inner-button-type.enum";
import {SeparatorMenuState} from "../../enums/separator-menu-state.enum";
import {AlertsService} from "../../service/alerts.service";
import {SettingsAlertComponent} from "../settings-alert/settings-alert.component";
import {HistoryComponent} from '../history/history.component';

@Component({
  selector: 'separator-inner-menu-button',
  templateUrl: 'separator-inner-menu-button.html',
  styleUrls: ['separator-inner-menu-button.css']
})
export class SeparatorInnerMenuButtonComponent implements OnInit {
  @Input()
  public iconType: SeparatorMenuInnerButtonType;

  public classObj: any = {};

  constructor(private separatorMenuService: SeparatorMenuService, private alertsService: AlertsService) {
  }

  ngOnInit(): void {
    this.classObj = [
      'icon', SeparatorMenuInnerButtonType[this.iconType]
    ];
  }

  public doButtonAction() {
    switch (this.iconType) {
      case SeparatorMenuInnerButtonType.settings:
        this.alertsService.show(SettingsAlertComponent);
        break;
      case SeparatorMenuInnerButtonType.history:
        this.alertsService.show(HistoryComponent);
        break;
      case SeparatorMenuInnerButtonType.dices:
        this.separatorMenuService.activateDices();
        break;
      case SeparatorMenuInnerButtonType.lifeRange:
        this.separatorMenuService.state = SeparatorMenuState.LIFE_RANGE;
        break;
      case SeparatorMenuInnerButtonType.reset:
        this.separatorMenuService.resetCounters();
        break;
    }
  }
}
