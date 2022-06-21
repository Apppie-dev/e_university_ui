import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminFacultyCreateComponent} from "./page-admin-faculty-create/page-admin-faculty-create.component";



const moduleRoutes: Routes = [
  {
    path: 'create',
    component: PageAdminFacultyCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AdminFacultyRoutesModule {

}
