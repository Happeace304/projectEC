import { Component } from "@angular/core";
import { BaseComponent } from "src/app/base/base-component";
import ButtonConfig from "src/app/controls/viewModels/buttonConfig";

@Component({
  selector: "header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.scss"],
})
export class HeaderContainerComponent extends BaseComponent {
  menuConfig: ButtonConfig;

  constructor() {
    super();

    this.initMenuConfig();
  }

  initMenuConfig() {
    this.menuConfig = {
      type: "mat-icon-button",
      color: "accent",
      ariaLabel: "Label",
      cssClass: "",
    };
  }
}
