import { OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

export class BaseComponent implements OnDestroy, OnInit {
  destroy$ = new Subject<void>();

  ngOnInit() {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
