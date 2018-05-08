/**
 * Created by Topplegeist Team on 29/04/2017.
 */

import {Injectable, Type} from "@angular/core";
import {AlertComponent} from "../commons/alert.component";
import {AlertWrapperComponent} from "../commons/alert-wrapper/alert-wrapper.component";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class AlertsService {
  private alertWrapper: ReplaySubject<AlertWrapperComponent> = new ReplaySubject(1);
  private _open: boolean;

  public init(alertWrapper: AlertWrapperComponent) {
    this.alertWrapper.next(alertWrapper);
  }

  public show(alert: Type<AlertComponent>) {
    let subscription: Subscription = this.alertWrapper.subscribe((alertWrapper: AlertWrapperComponent) => {
      alertWrapper.loadAlert(alert);
      if (subscription)
        subscription.unsubscribe();
    });
    if (subscription)
      subscription.unsubscribe();
  }

  public close(alert: AlertComponent) {
    let subscription: Subscription = this.alertWrapper.subscribe((alertWrapper: AlertWrapperComponent) => {
      alertWrapper.destroyAlert(alert);
      if (subscription)
        subscription.unsubscribe();
    });
    if (subscription)
      subscription.unsubscribe();
  }
}
