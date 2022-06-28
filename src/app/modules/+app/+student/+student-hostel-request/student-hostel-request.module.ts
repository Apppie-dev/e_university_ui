import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {StudentHostelRequestRoutesModule} from "./student-hostel-request.routes.module";
import {PageCreateHostelRequestComponent} from "./page-create-hostel-request/page-create-hostel-request.component";

@NgModule({
  declarations: [
    PageCreateHostelRequestComponent
  ],
  imports: [
    CommonModule,
    StudentHostelRequestRoutesModule,
    SharedModule,

  ]
})
export class StudentHostelRequestModule {
}
