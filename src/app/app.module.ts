import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {MainViewComponent} from "./components/main-view/main-view.component";
import {PlayerFieldComponent} from "./components/player-field/player-field.component";
import {LifeService} from "./service/life.service";
import {LifeCounterComponent} from "./components/life-counter/life-counter.component";
import {SplashscreenComponent} from "./components/splashscreen/splashscreen.component";
import {HudInteractionLayerComponent} from "./components/hud-interaction-layer/hud-interaction-layer.component";

@NgModule({
  declarations: [
    AppComponent,
    SplashscreenComponent,
    MainViewComponent,
    PlayerFieldComponent,
    LifeCounterComponent,
    HudInteractionLayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LifeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
