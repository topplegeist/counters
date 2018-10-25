/**
 * Created by Topplegeist Team on 13/04/2017.
 */

import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public splashscreenActive: boolean = true;

  ngOnInit(): void {
    setTimeout(
      () => {
        this.splashscreenActive = false;
        (<any>window).plugins.insomnia.keepAwake();

        (<any>window).history.pushState("BackLock", null, "");

        (<any>window).onpopstate = (evt) => {
          if(!this.splashscreenActive) {
            (<any>window).history.pushState("BackLock", null, "");
          }
          return;
        }
      },
      3000
    );
  }
}
