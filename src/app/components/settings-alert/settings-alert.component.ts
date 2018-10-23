/**
 * Created by Topplegeist Team on 25/04/2018.
 */

import {AlertComponent} from "../../commons/alert.component";
import {Component, OnInit, ViewChild} from "@angular/core";
import {SettingsAlertViewModel} from "./settings-alert.viewmodel";
import {OptionalCountersService} from "../../service/optional-counters.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {HUDService} from "../../service/hud.service";

@Component({
  selector: 'settings-alert',
  templateUrl: 'settings-alert.html',
  styleUrls: ['settings-alert.less']
})
export class SettingsAlertComponent extends AlertComponent implements OnInit {
  public model: SettingsAlertViewModel;
  public startingModel: SettingsAlertViewModel;
  private modelSubscription: Subscription;

  @ViewChild('settingsForm') public settingsForm: NgForm;

  constructor(private optionalCountersService: OptionalCountersService,
              private hudService: HUDService) {
    super();
    this.model = new SettingsAlertViewModel(
      this.optionalCountersService.commanderCounterMenu[0],
      this.optionalCountersService.commanderCounterMenu[1],
      this.optionalCountersService.partnerCounterMenu[0],
      this.optionalCountersService.partnerCounterMenu[1],
      this.optionalCountersService.poisonCounterMenu[0],
      this.optionalCountersService.poisonCounterMenu[1],
      this.optionalCountersService.monarchToken == 0,
      this.optionalCountersService.monarchToken == 1,
      this.optionalCountersService.citiesBlessingToken[0],
      this.optionalCountersService.citiesBlessingToken[1],
      this.hudService.showIcons[0],
      this.hudService.showIcons[1]
    );
    this.startingModel = new SettingsAlertViewModel(
      this.optionalCountersService.commanderCounterMenu[0],
      this.optionalCountersService.commanderCounterMenu[1],
      this.optionalCountersService.partnerCounterMenu[0],
      this.optionalCountersService.partnerCounterMenu[1],
      this.optionalCountersService.poisonCounterMenu[0],
      this.optionalCountersService.poisonCounterMenu[1],
      this.optionalCountersService.monarchToken == 0,
      this.optionalCountersService.monarchToken == 1,
      this.optionalCountersService.citiesBlessingToken[0],
      this.optionalCountersService.citiesBlessingToken[1],
      this.hudService.showIcons[0],
      this.hudService.showIcons[1]
    );
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.modelSubscription = this.settingsForm.valueChanges.subscribe((model: any) => this.writeModelToService(model));
  }

  writeModelToService(model: SettingsAlertViewModel) {
    this.optionalCountersService.commanderCounterMenu[0] = model.player1Commander;
    this.optionalCountersService.commanderCounterMenu[1] = model.player2Commander;
    this.optionalCountersService.partnerCounterMenu[0] = model.player1Partner;
    this.optionalCountersService.partnerCounterMenu[1] = model.player2Partner;
    this.optionalCountersService.poisonCounterMenu[0] = model.player1Poison;
    this.optionalCountersService.poisonCounterMenu[1] = model.player2Poison;
    this.optionalCountersService.monarchToken = model.player1Monarch ? 0 : (model.player2Monarch ? 1 : -1);
    this.optionalCountersService.citiesBlessingToken[0] = model.player1CitysBlessing;
    this.optionalCountersService.citiesBlessingToken[1] = model.player2CitysBlessing;
    this.hudService.showIcons[0] = model.player1ShowIcons;
    this.hudService.showIcons[1] = model.player2ShowIcons;
  }

  save() {
    this.modelSubscription.unsubscribe();
  }

  cancel() {
    this.writeModelToService(this.startingModel);
    this.modelSubscription.unsubscribe();
  }

  playerCommanderChange(playerIndex: number, event: boolean) {
    console.log(event);
    if (playerIndex == 0) {
      this.model.player1Commander = event;
      if (!event) this.model.player1Partner = event;
    }
    else if (playerIndex == 1) {
      this.model.player2Commander = event;
      if (!event) this.model.player2Partner = event;
    }
  }

  playerPartnerChange(playerIndex: number, event: boolean) {
    if (playerIndex == 0) {
      this.model.player1Partner = event;
      if (event) this.model.player1Commander = event;
    }
    else if (playerIndex == 1) {
      this.model.player2Partner = event;
      if (event) this.model.player2Commander = event;
    }
  }

  playerMonarchChange(playerIndex: number, event: boolean) {
    if (playerIndex == 0) {
      this.model.player1Monarch = event;
      if (event) this.model.player2Monarch = !event;
    }
    else if (playerIndex == 1) {
      this.model.player2Monarch = event;
      if (event) this.model.player1Monarch = !event;
    }
  }
}
