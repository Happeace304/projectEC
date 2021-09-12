import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { BaseButtonComponent } from "./button/button.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
// import { NzRadioModule } from "ng-zorro-antd/radio";

@NgModule({
  declarations: [BaseButtonComponent, CarouselComponent],
  imports: [CommonModule, MatButtonModule, NzCarouselModule],
  exports: [BaseButtonComponent, CarouselComponent],
})
export class ControlsModule {}
