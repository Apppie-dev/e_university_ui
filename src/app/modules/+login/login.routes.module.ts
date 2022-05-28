import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginComponent } from './page-login/page-login.component';

const moduleRoutes: Routes = [
  {
    path: '',
    component: PageLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class LoginRoutesModule {
}
