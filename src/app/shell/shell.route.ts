import { Routes, RouterModule } from "@angular/router";
import { HomeDashboardComponent } from "../home/dashboard/dashboard.component";
import { HomeModule } from "../home/home.module";

const routes: Routes = [{ path: "", component: HomeDashboardComponent }];

export const routingImport = RouterModule.forRoot(routes);
export const moduleImport = [HomeModule];
