/**
 * Created by Topplegeist Team on 29/04/2017.
 */

import {Component, ElementRef, Type, ViewChild} from "@angular/core";
import {AlertsDirective} from "../../directives/alerts.directive";
import {AlertComponent} from "../alert.component";
import {AlertsService} from "../../service/alerts.service";
import {ButtonData} from "../../models/button-data.model";

@Component({
  selector: 'alert-wrapper',
  templateUrl: './alert-wrapper.html',
  styleUrls: ['./alert-wrapper.css']
})
export class AlertWrapperComponent {
  @ViewChild(AlertsDirective, {static: false})
  private alertsHost: AlertsDirective;

  @ViewChild('backgroundImage', {static: false})
  private backgroundImage: ElementRef;

  public currentComponent: AlertComponent = null;
  public buttons: ButtonData[];

  constructor(public alertsService: AlertsService) {
    this.alertsService.init(this);
  }

  public loadAlert(alert: Type<AlertComponent>) {
    this.alertsHost.clear();
    this.currentComponent = this.alertsHost.add(alert);
    this.currentComponent.alertsService = this.alertsService;
    this.buttons = this.currentComponent.getButtons();
  }

  public destroyAlert(alert: AlertComponent) {
    if (this.currentComponent != alert)
      return;

    this.currentComponent = null;
    this.alertsHost.clear();
    this.buttons = [];
  }

  public hostIsEmpty(): boolean {
    return this.alertsHost.isEmpty()
  }
}
