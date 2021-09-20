import { Component, OnInit } from "@angular/core";
import {
  CarouselConfig,
  CarouselData,
} from "src/app/controls/viewModels/carousel";

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class HomeDashboardComponent implements OnInit {
  constructor() {}
  data: CarouselData;

  ngOnInit(): void {
    this.data = {
      images: ["./assets/images/banner.png"],
    };
  }
}
