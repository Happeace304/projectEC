import { Component, OnInit } from "@angular/core";
import { CarouselConfig } from "../viewModels/carousel";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  data;
  carouselConfig: CarouselConfig;

  constructor() {}

  ngOnInit(): void {
    this.initCarouselConfig();
    this.data = {
      imageData: {
        images: [
          "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552_square.jpg",
          "https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552_square.jpg",
        ],
        isHot: true,
      },
    };
  }

  private initCarouselConfig() {
    this.carouselConfig = { autoplay: true };
  }
}
