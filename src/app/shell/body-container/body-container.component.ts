import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";
import { BaseComponent } from "../../base/base-component";

@Component({
  selector: "body-container",
  templateUrl: "./body-container.component.html",
  styleUrls: ["./body-container.component.scss"],
})
export class BodyContainerComponent extends BaseComponent {
  @ViewChild("sidenavToggler") sidenavToggler: ElementRef<any>;
  @ViewChild("sidenav") sidenav: MatSidenav;

  private sidenav$: Observable<any>;
  constructor(private store: Store<{ sidenav: any }>) {
    super();

    this.sidenav$ = store.select("sidenav");
    this.initSidenavToggleEventListener();
  }

  private initSidenavToggleEventListener() {
    this.sidenav$
      .pipe(
        takeUntil(this.destroy$),
        tap(({ value }) => {
          this.togglesidenav(value);
        })
      )
      .subscribe();
  }

  private togglesidenav(value): void {
    if (value) {
      this.sidenav?.open();
    } else {
      this.sidenav?.close();
    }
  }
}
