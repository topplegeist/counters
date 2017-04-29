/**
 * Created by Soulbound Team on 29/04/2017.
 */

import {AlertsService} from "../service/alerts.service";
import {ButtonData} from "../models/button-data.model";

export abstract class AlertComponent {
  public alertsService: AlertsService;

  public close(){
    this.alertsService.close(this);
  }

  public getButtons(): ButtonData[] {
    let button1 = new ButtonData();
    button1.label="OK";
    button1.clazz = "default";
    button1.callback = () => this.close();

    let button2 = new ButtonData();
    button2.label="Cancel";
    button2.clazz = "cancel";
    button2.callback = () => this.close();

    return [ button1, button2 ];
  }
}
