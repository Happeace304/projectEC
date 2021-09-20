import { Component, Input, OnInit } from "@angular/core";
import { CarouselConfig, CarouselData } from "../viewModels/carousel";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  @Input("config") config: CarouselConfig;
  @Input("data") data: CarouselData;

  constructor() {}

  ngOnInit(): void {}

  get dotPosition(): string {
    return this.config?.dotPosition || "bottom";
  }
}
