import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageCreateHostelRequestComponent} from "./page-create-hostel-request/page-create-hostel-request.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageCreateHostelRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class StudentHostelRequestRoutesModule {
}
