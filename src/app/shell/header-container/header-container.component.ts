import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { BaseComponent } from "src/app/base/base-component";
import { ButtonConfig } from "src/app/controls/viewModels/buttonConfig";
import { menuItem } from "src/app/store/menu/menu.reducer";
import { toggle } from "src/app/store/sidenav/sidenav.actions";

@Component({
  selector: "header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.scss"],
})
export class HeaderContainerComponent extends BaseComponent {
  menuConfig: ButtonConfig;
  menu$;
  constructor(private store: Store<{ sidenav: boolean; menu: menuItem[] }>) {
    super();

    this.initMenuConfig();
    this.menu$ = this.store.select("menu");
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
