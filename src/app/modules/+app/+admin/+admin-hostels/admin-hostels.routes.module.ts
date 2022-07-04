import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageAdminHostelsListComponent} from "./page-admin-hostels-list/page-admin-hostels-list.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAdminHostelsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AdminHostelsRoutesModule {
}
