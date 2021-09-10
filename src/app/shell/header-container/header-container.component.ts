import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { BaseComponent } from "src/app/base/base-component";
import { ButtonConfig } from "src/app/controls/viewModels/buttonConfig";
import { toggle } from "src/app/store/sidenav/sidenav.actions";

@Component({
  selector: "header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.scss"],
})
export class HeaderContainerComponent extends BaseComponent {
  menuConfig: ButtonConfig;

  constructor(private store: Store<{ sidenav: boolean }>) {
    super();

    this.initMenuConfig();
  }

  initMenuConfig() {
    this.menuConfig = {
      type: "mat-icon-button",
      color: "button--menu",
      cssClass: "bottom-shadow",
      onButtonClick: () => this.store.dispatch(toggle()),
    };
  }
}
