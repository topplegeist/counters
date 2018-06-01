/**
 * Created by Topplegeist Team on 29/04/2017.
 */

import {AlertComponent} from "./alert.component";
import {ButtonData} from "../models/button-data.model";

export abstract class ConfirmationAlertComponent extends AlertComponent {
  abstract yesCallback();

  abstract noCallback();

  public getButtons(): ButtonData[] {
    let buttons: ButtonData[] = super.getButtons();
    buttons[0].label = "Yes";
    buttons[0].callback = () => this.yesCallback();
    buttons[1].label = "No";
    buttons[1].callback = () => this.noCallback();
    return buttons;
  }
}
