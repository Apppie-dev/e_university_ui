import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/guards';


const moduleRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/+login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/+app/app.module').then(m => m.AppModule)
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    loadChildren: () => import('./modules/+not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(moduleRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
