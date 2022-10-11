import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {AdminUsersRoutesModule} from "./admin-users.routes.module";
import {PageAdminUsersCreateComponent} from "./page-admin-users-create/page-admin-users-create.component";
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    PageAdminUsersCreateComponent
  ],
  imports: [
    CommonModule,
    AdminUsersRoutesModule,
    SharedModule,
    DropdownModule,

  ]
})
export class AdminUsersModule {
}
