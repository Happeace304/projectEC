import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { HeaderContainerComponent } from "./header-container/header-container.component";
import { BodyContainerComponent } from "./body-container/body-container.component";
import { ControlsModule } from "../controls/controls.module";

@NgModule({
  declarations: [HeaderContainerComponent, BodyContainerComponent],
  imports: [CommonModule, MatSidenavModule, ControlsModule, MatIconModule],
  exports: [BodyContainerComponent],
})
export class ShellModule {}
