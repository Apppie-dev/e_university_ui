import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './page-login/page-login.component';
import { PagePasswordResetComponent} from "./page-password-reset/page-password-reset.component";
import {PageCheckExistUserComponent} from "./page-check-exist-user/page-check-exist-user.component";
import {PageRegistrationComponent} from "./page-registration/page-registration.component";

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageLoginComponent
  },
  {
    path: 'reset-password',
    component: PagePasswordResetComponent
  },
  {
    path: 'check-exist-user',
    component: PageCheckExistUserComponent
  },
  {
    path: 'registration',
    component: PageRegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class LoginRoutesModule {
}
