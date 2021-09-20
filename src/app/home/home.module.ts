import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeDashboardComponent } from "./dashboard/dashboard.component";
import { ControlsModule } from "../controls/controls.module";
import { ItemsService } from "./services/items/items.service";

@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [CommonModule, ControlsModule],
  providers: [],
  exports: [HomeDashboardComponent],
})
export class HomeModule {}
