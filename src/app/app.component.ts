/**
 * Created by Soulbound Team on 13/04/2017.
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
      },
      3000
    );
  }
}
