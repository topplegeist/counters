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
      },
      2000
    );
  }
}
