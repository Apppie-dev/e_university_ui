import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {AdminRoutesModule} from "./admin.routes.module";

@NgModule({
  declarations: [
  ],
  imports: [
    AdminRoutesModule,
    CommonModule,
    SharedModule,

  ]
})
export class AdminModule {
}
