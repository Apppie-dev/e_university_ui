import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutesModule {
}
