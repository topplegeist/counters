/**
 * Created by Soulbound Team on 13/04/2017.
 */

import {Component, Input} from "@angular/core";
import {LifeService} from "../../service/life.service";

@Component({
  selector: 'life-counter',
  templateUrl: 'life-counter.html',
  styleUrls: ['life-counter.css']
})
export class LifeCounterComponent {
  @Input()
  public playerIndex: number;

  constructor(public lifeService: LifeService) {
  }
}
