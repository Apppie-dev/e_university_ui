import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {PageStudentComponent} from "./page-student/page-student.component";
import {StudentRoutesModule} from "./student.routes.module";

@NgModule({
  declarations: [
    PageStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutesModule,
    SharedModule,

  ]
})
export class StudentModule {
}
