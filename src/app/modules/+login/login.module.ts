import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LoginRoutesModule } from './login.routes.module';
import { PageLoginComponent } from './page-login/page-login.component';

@NgModule({
  declarations: [
    PageLoginComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        LoginRoutesModule,
    ]
})
export class LoginModule {
}
