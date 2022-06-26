import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {StudentOrdersRoutesModule} from "./student-new-orders.routes.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StudentOrdersRoutesModule,
    SharedModule,

  ]
})
export class StudentNewOrdersModule {
}
