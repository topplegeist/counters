import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MainViewComponent} from "./components/main-view/main-view.component";
import {PlayerFieldComponent} from "./components/player-field/player-field.component";

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    PlayerFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
