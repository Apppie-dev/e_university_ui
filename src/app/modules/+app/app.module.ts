import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes.module';
import { PageAppComponent } from './page-app/page-app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    PageAppComponent,
  ],
  imports: [
    AppRoutesModule,
    CommonModule,
    SharedModule,
  ]
})
export class AppModule {
}
