import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSuperAdminFacultyListComponent} from "./page-super-admin-faculties-list/page-super-admin-faculty-list.component";
import {PageAdminFacultiesCreateComponent} from "./page-super-admin-faculties-create/page-admin-faculties-create.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageSuperAdminFacultyListComponent
  },
  {
    path: 'create',
    component: PageAdminFacultiesCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class SuperAdminFacultiesRoutesModule {
}
