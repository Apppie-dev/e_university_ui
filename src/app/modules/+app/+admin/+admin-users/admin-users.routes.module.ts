import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageAdminUsersCreateComponent} from "./page-admin-users-create/page-admin-users-create.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAdminUsersCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AdminUsersRoutesModule {
}
