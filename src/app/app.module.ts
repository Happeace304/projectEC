import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { BodyContainerComponent } from "./body-container/body-container.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { StoreModule } from "@ngrx/store";
import reducers from "./store/reducers";

@NgModule({
  declarations: [AppComponent, BodyContainerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
