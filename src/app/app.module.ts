/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {MainViewComponent} from "./components/main-view/main-view.component";
import {PlayerFieldComponent} from "./components/player-field/player-field.component";
import {LifeService} from "./service/life.service";
import {LifeCounterComponent} from "./components/life-counter/life-counter.component";
import {SplashscreenComponent} from "./components/splashscreen/splashscreen.component";
import {HudInteractionLayerComponent} from "./components/hud-interaction-layer/hud-interaction-layer.component";
import {SeparatorMenuComponent} from "./components/separator-menu/separator-menu.component";
import {SeparatorInnerMenuComponent} from "./components/separator-inner-menu/separator-inner-menu.component";
import {SeparatorMenuButtonComponent} from "./components/separator-menu-button/separator-menu-button.component";
import {SeparatorMenuService} from "./service/separator-menu.service";
import {BackgroundSliderComponent} from "./components/background-slider/background-slider.component";
import {SeparatorInnerMenuButtonComponent} from "./components/separator-inner-menu-button/separator-inner-menu-button.component";
import {SeparatorLifeRangeMenuComponent} from "./components/separator-life-range-menu/separator-life-range-menu.component";
import {DiceService} from "./service/dice.service";
import {DiceFieldComponent} from "./components/dice-field/dice-field.component";
import {DicesViewComponent} from "./components/dices-view/dices-view.component";
import {AlertsService} from "./service/alerts.service";
import {AlertWrapperComponent} from "./commons/alert-wrapper/alert-wrapper.component";
import {AlertsDirective} from "./directives/alerts.directive";
import {OptionalCountersService} from "./service/optional-counters.service";
import {OptionalCountersComponent} from "./components/optional-counters/optional-counters.component";
import {SettingsAlertComponent} from "./components/settings-alert/settings-alert.component";
import {FormsModule} from "@angular/forms";
import {HUDService} from "./service/hud.service";
import {TopIconsComponent} from "./components/top-icons/top-icons.component";

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  entryComponents: [
    SettingsAlertComponent
  ],
  declarations: [
    AppComponent,
    AlertsDirective,
    AlertWrapperComponent,
    SplashscreenComponent,
    TopIconsComponent,
    MainViewComponent,
    PlayerFieldComponent,
    LifeCounterComponent,
    HudInteractionLayerComponent,
    SeparatorMenuComponent,
    SeparatorInnerMenuComponent,
    SeparatorInnerMenuButtonComponent,
    SeparatorMenuButtonComponent,
    SeparatorLifeRangeMenuComponent,
    BackgroundSliderComponent,
    DicesViewComponent,
    DiceFieldComponent,
    OptionalCountersComponent,
    SettingsAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    LifeService,
    SeparatorMenuService,
    DiceService,
    AlertsService,
    OptionalCountersService,
    HUDService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
