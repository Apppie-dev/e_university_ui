import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAppComponent } from './page-app/page-app.component';
import {RoleAdminGuard, RoleStudentGuard, RoleSuperAdminGuard} from "@app/guards";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAppComponent,
    children: [
      // Student Routes Area
      {
        path: 'student',
        canActivate: [RoleStudentGuard],
        loadChildren: () => import('./+student/student.module').then(m => m.StudentModule)
      },


      // Admin Routes Area
      {
        path: 'admin',
        canActivate: [RoleAdminGuard],
        loadChildren: () => import('./+admin/admin.module').then(m => m.AdminModule)
      },


      // Super Admin Routes Area
      {
        path: 'super-admin',
        canActivate: [RoleSuperAdminGuard],
        loadChildren: () => import('./+superadmin/superadmin.module').then(m => m.SuperAdminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}
