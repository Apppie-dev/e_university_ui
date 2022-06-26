import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageStudentDocumentsListComponent} from "./page-student-documents-list/page-student-documents-list.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component:   PageStudentDocumentsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentDocumentsRoutesModule {
}
