import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {PageStudentOrdersListComponent} from "./page-student-orders-list/page-student-orders-list.component";
import {StudentOrdersRoutesModule} from "./student-orders.routes.module";
import {PageStudentOrdersDetailComponent} from "./page-student-orders-detail/page-student-orders-detail.component";

@NgModule({
  declarations: [
    PageStudentOrdersListComponent,
    PageStudentOrdersDetailComponent
  ],
  imports: [
    CommonModule,
    StudentOrdersRoutesModule,
    SharedModule,

  ]
})
export class StudentOrdersModule {
}
