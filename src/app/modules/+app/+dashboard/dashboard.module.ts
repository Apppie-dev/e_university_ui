import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { DashboardRoutesModule } from './dashboard.routes.module';

@NgModule({
  declarations: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutesModule
  ]
})
export class DashboardModule {
}
