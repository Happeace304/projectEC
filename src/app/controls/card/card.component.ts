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
          "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607",
          "https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg",
        ],
        isHot: true,
      },
    };
  }

  private initCarouselConfig() {
    this.carouselConfig = { autoplay: true };
  }
}
