import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageStudentComponent} from "./page-student/page-student.component";

const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    component: PageStudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentRoutesModule {
}
