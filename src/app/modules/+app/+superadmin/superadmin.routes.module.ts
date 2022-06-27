import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageSuperAdminComponent} from "./page-superadmin/page-superadmin.component";

const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users'
  },
  {
    path: 'faculties',
    loadChildren: () => import('./+super-admin-faculties/super-admin-faculties.module').then(m => m.SuperAdminFacultiesModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./+super-admin-students/super-admin-students.module').then(m => m.SuperAdminStudentsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./+super-admin-users/super-admin-users.module').then(m => m.SuperAdminUsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class SuperAdminRoutesModule {
}
