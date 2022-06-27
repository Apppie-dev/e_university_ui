import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageStudentComponent} from "./page-student/page-student.component";

const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'orders'
  }, {
    path: 'documents',
    loadChildren: () => import('./+student-documents/student-documents.module').then(m => m.StudentDocumentsModule)
  }, {
    path: 'orders',
    loadChildren: () => import('./+student-orders/student-orders.module').then(m => m.StudentOrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentRoutesModule {
}
