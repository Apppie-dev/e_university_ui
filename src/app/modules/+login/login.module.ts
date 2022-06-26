import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { LoginRoutesModule } from './login.routes.module';
import { PageLoginComponent } from './page-login/page-login.component';
import {PagePasswordResetComponent} from "./page-password-reset/page-password-reset.component";
import {PageCheckExistUserComponent} from "./page-check-exist-user/page-check-exist-user.component";
import {PageRegistrationComponent} from "./page-registration/page-registration.component";


@NgModule({
  declarations: [
    PageLoginComponent,
    PagePasswordResetComponent,
    PageCheckExistUserComponent,
    PageRegistrationComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        LoginRoutesModule,
    ]
})
export class LoginModule {
}
