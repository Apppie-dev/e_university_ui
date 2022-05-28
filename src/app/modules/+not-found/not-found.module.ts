import { NgModule } from '@angular/core';
import { NotFoundRoutesModule } from './not-found.routes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotFoundRoutesModule
  ]
})
export class NotFoundModule {
}
