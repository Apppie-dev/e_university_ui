import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAppComponent } from './page-app/page-app.component';
import { AuthGuard } from '@app/guards';

const moduleRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: PageAppComponent,
    children: [
      // Default user area
      {
        path: 'dashboard',
        loadChildren: () => import('./+dashboard/dashboard.module').then(m => m.DashboardModule)
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
