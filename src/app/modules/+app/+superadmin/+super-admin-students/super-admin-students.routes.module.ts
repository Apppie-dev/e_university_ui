import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSuperAdminStudentsListComponent} from "./page-super-admin-students-list/page-super-admin-students-list.component";
import {PageSuperAdminStudentsCreateComponent} from "./page-super-admin-students-create/page-super-admin-students-create.component";



const moduleRoutes: Routes = [
  {
    path: '',
    component: PageSuperAdminStudentsListComponent,
  },
  {
    path: 'create',
    component: PageSuperAdminStudentsCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class SuperAdminStudentsRoutesModule {
}
