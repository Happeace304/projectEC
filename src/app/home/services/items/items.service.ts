import { Injectable } from "@angular/core";
import { ItemsReadService } from "./items.read.service";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor(private itemsReadService: ItemsReadService) {}

  getItems = this.itemsReadService.getItems.bind(this.itemsReadService);
}
