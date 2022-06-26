import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {AdminRoutesModule} from "./admin.routes.module";
import {PageAdminComponent} from "./page-admin/page-admin.component";

@NgModule({
  declarations: [
    PageAdminComponent,
  ],
  imports: [
    AdminRoutesModule,
    CommonModule,
    SharedModule,

  ]
})
export class AdminModule {
}
