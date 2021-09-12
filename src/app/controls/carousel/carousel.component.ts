import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  @Input("config") config;
  @Input("data") data;

  constructor() {}

  ngOnInit(): void {}

  get dotPosition(): string {
    return this.config?.dotPosition || "bottom";
  }
}
