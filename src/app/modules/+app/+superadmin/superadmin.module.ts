import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {SuperAdminRoutesModule} from "./superadmin.routes.module";
import {PageSuperAdminComponent} from "./page-superadmin/page-superadmin.component";

@NgModule({
  declarations: [
    PageSuperAdminComponent,
  ],
  imports: [
    SuperAdminRoutesModule,
    CommonModule,
    SharedModule,

  ]
})
export class SuperAdminModule {
}
