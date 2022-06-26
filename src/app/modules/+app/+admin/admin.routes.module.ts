import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminComponent} from "./page-admin/page-admin.component";

const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: PageAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {
}
