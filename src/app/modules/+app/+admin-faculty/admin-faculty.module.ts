import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageAdminFacultyCreateComponent} from "./page-admin-faculty-create/page-admin-faculty-create.component";
import {AdminFacultyRoutesModule} from "./admin-faculty.routes.module";
import {SharedModule} from "@app/shared/shared.module";
import {PageAdminFacultyListComponent} from "./page-admin-faculty-list/page-admin-faculty-list.component";


@NgModule({
  declarations: [
    PageAdminFacultyCreateComponent,
    PageAdminFacultyListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminFacultyRoutesModule
  ]
})
export class AdminFacultyModule {

}
