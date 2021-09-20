import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { BaseComponent } from "src/app/base/base-component";
import { CarouselData } from "src/app/controls/viewModels/carousel";
import { ItemsService } from "../services/items/items.service";

@Component({
  selector: "home-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class HomeDashboardComponent extends BaseComponent {
  bannerData: CarouselData;
  items$: Observable<any[]>;

  constructor(private itemsService: ItemsService) {
    super();
  }

  ngOnInit() {
    this.initBanner();
    this.getItems();
  }

  private getItems() {
    this.items$ = this.itemsService.getItems().pipe(takeUntil(this.destroy$));
  }

  private initBanner() {
    this.bannerData = {
      images: ["./assets/images/banner.png"],
    };
  }
}
