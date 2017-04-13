/**
 * Created by Soulbound Team on 13/04/2017.
 */
import {Component, Input} from "@angular/core";

@Component({
  selector: 'player-field',
  templateUrl: 'player-field.html',
  styleUrls: ['player-field.css']
})
export class PlayerFieldComponent {
  @Input()
  public inverted: boolean;

  @Input()
  public playerIndex: number = 0;
}
