import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {StudentDocumentsRoutesModule} from "./student-documents.routes.module";
import {
  PageStudentDocumentsListComponent
} from "./page-student-documents-list/page-student-documents-list.component";

@NgModule({
  declarations: [
    PageStudentDocumentsListComponent
  ],
  imports: [
    CommonModule,
    StudentDocumentsRoutesModule,
    SharedModule,

  ]
})
export class StudentDocumentsModule {
}
