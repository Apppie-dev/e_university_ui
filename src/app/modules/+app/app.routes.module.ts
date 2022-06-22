import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAppComponent } from './page-app/page-app.component';
import { AuthGuard } from '@app/guards';

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageAppComponent,
    children: [
      // Default user area
      {
        path: 'dashboard',
        loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'faculty',
        loadChildren: () => import('./+admin-faculty/admin-faculty.module').then(m => m.AdminFacultyModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./+admin-users/admin-users.module').then(m => m.AdminUsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}
