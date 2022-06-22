import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminCreateUserComponent } from './page-admin-create-user/page-admin-create-user.component';
import {SharedModule} from "@app/shared/shared.module";
import {AdminCreateUserRoutes} from "./admin-users.routes.module";
import {PageAdminUserListComponent} from "./page-admin-user-list/page-admin-user-list.component";

@NgModule({
  declarations: [
    PageAdminCreateUserComponent,
    PageAdminUserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminCreateUserRoutes
  ]
})
export class AdminUsersModule { }
