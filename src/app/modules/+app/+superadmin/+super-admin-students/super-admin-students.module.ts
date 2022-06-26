import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuperAdminStudentsRoutesModule} from "./super-admin-students.routes.module";
import {SharedModule} from "@app/shared/shared.module";
import {PageSuperAdminStudentsCreateComponent} from "./page-super-admin-students-create/page-super-admin-students-create.component";
import {PageSuperAdminStudentsListComponent} from "./page-super-admin-students-list/page-super-admin-students-list.component";


@NgModule({
  declarations: [
    PageSuperAdminStudentsCreateComponent,
    PageSuperAdminStudentsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SuperAdminStudentsRoutesModule
  ]
})
export class SuperAdminStudentsModule {

}
