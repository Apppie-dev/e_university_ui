import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageStudentOrdersListComponent} from "./page-student-orders-list/page-student-orders-list.component";
import {PageStudentOrdersDetailComponent} from "./page-student-orders-detail/page-student-orders-detail.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageStudentOrdersListComponent
  }, {
    path: 'detail/:id',
    component: PageStudentOrdersDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentOrdersRoutesModule {
}
