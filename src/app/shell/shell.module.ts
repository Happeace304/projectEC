import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { HeaderContainerComponent } from "./header-container/header-container.component";
import { BodyContainerComponent } from "./body-container/body-container.component";
import { ControlsModule } from "../controls/controls.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainContainerComponent } from "./main-container/main-container.component";
import { moduleImport, routingImport } from "./shell.route";

@NgModule({
  declarations: [
    HeaderContainerComponent,
    BodyContainerComponent,
    SidebarComponent,
    MainContainerComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ControlsModule,
    MatIconModule,
    moduleImport,
    routingImport,
  ],
  providers: [],
  exports: [BodyContainerComponent],
})
export class ShellModule {}
