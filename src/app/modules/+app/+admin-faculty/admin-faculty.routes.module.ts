import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminFacultyCreateComponent} from "./page-admin-faculty-create/page-admin-faculty-create.component";
import {PageAdminFacultyListComponent} from "./page-admin-faculty-list/page-admin-faculty-list.component";



const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAdminFacultyListComponent,
  },
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
