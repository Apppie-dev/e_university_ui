import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSuperAdminUsersCreateComponent} from "./page-super-admin-users-create/page-super-admin-users-create.component";
import {PageSuperAdminUsersListComponent} from "./page-super-admin-users-list/page-super-admin-users-list.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageSuperAdminUsersListComponent
  },
  {
    path: 'create',
    component: PageSuperAdminUsersCreateComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})

export class AdminCreateUserRoutes {
}
