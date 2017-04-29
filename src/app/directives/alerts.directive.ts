/**
 * Created by Soulbound Team on 29/04/2017.
 */

import {ComponentFactory, ComponentFactoryResolver, Directive, Type, ViewContainerRef} from "@angular/core";
import {AlertComponent} from "../commons/alert.component";

@Directive({
  selector: '[alerts-host]',
})
export class AlertsDirective {
  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public clear() {
    this.viewContainerRef.clear();
  }

  public add(alert: Type<AlertComponent>): AlertComponent {
    let componentFactory: ComponentFactory<AlertComponent> =
      this.componentFactoryResolver.resolveComponentFactory(alert);
    return this.viewContainerRef.createComponent(componentFactory).instance;
  }
}
