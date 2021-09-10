import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { BaseButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [BaseButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [BaseButtonComponent],
})
export class ControlsModule {}
