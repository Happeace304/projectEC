import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseButtonComponent } from "./button/button.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CardComponent } from "./card/card.component";

//material design
import { MatButtonModule } from "@angular/material/button";

//ant design
import { NzCarouselModule } from "ng-zorro-antd/carousel";

@NgModule({
  declarations: [BaseButtonComponent, CarouselComponent, CardComponent],
  imports: [CommonModule, MatButtonModule, NzCarouselModule],
  exports: [BaseButtonComponent, CarouselComponent, CardComponent],
})
export class ControlsModule {}
