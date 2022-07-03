import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageCreateHostelRequestComponent} from "./page-create-hostel-request/page-create-hostel-request.component";
import {PageStatusHostelRequestComponent} from "./page-status-hostel-request/page-status-hostel-request.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageCreateHostelRequestComponent
  },
  {
    path: 'status',
    component: PageStatusHostelRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentHostelRequestRoutesModule {
}
