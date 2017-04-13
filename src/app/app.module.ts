/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {BrowserModule} from "@angular/platform-browser";
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

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    MainViewComponent,
    PlayerFieldComponent,
    LifeCounterComponent,
    HudInteractionLayerComponent,
    SeparatorMenuComponent,
    SeparatorInnerMenuComponent,
    SeparatorMenuButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LifeService,
    SeparatorMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
