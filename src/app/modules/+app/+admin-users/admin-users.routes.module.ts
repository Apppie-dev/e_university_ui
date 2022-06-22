import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminCreateUserComponent} from "./page-admin-create-user/page-admin-create-user.component";
import {PageAdminUserListComponent} from "./page-admin-user-list/page-admin-user-list.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAdminUserListComponent
  },
  {
    path: 'create',
    component: PageAdminCreateUserComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})

export class AdminCreateUserRoutes {
}
