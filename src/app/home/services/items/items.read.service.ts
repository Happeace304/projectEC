import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ItemsReadService {
  constructor() {}

  getItems() {
    return of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  }
}
