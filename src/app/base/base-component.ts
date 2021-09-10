import { OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

export class BaseComponent implements OnDestroy, OnInit {
  destroy$ = new Subject<void>();

  ngOnInit() {
    this.onInit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  protected onInit() {}
}
