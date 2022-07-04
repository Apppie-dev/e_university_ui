import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {PageSuperAdminFacultyListComponent} from "./page-super-admin-faculties-list/page-super-admin-faculty-list.component";
import {PageSuperAdminFacultiesCreateComponent} from "./page-super-admin-faculties-create/page-admin-faculties-create.component";
import {SuperAdminFacultiesRoutesModule} from "./super-admin-faculties.routes.module";

@NgModule({
  declarations: [
    PageSuperAdminFacultyListComponent,
    PageSuperAdminFacultiesCreateComponent
  ],
  imports: [
    SuperAdminFacultiesRoutesModule,
    CommonModule,
    SharedModule,

  ]
})
export class SuperAdminFacultiesModule {
}
