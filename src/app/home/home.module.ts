import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeDashboardComponent } from "./dashboard/dashboard.component";
import { ControlsModule } from "../controls/controls.module";

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [CommonModule, ControlsModule],
  exports: [HomeDashboardComponent],
})
export class HomeModule {}
