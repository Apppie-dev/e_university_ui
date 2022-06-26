import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSuperAdminUsersCreateComponent } from './page-super-admin-users-create/page-super-admin-users-create.component';
import {SharedModule} from "@app/shared/shared.module";
import {AdminCreateUserRoutes} from "./super-admin-users.routes.module";
import {PageSuperAdminUsersListComponent} from "./page-super-admin-users-list/page-super-admin-users-list.component";

@NgModule({
  declarations: [
    PageSuperAdminUsersCreateComponent,
    PageSuperAdminUsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminCreateUserRoutes
  ]
})
export class SuperAdminUsersModule { }
