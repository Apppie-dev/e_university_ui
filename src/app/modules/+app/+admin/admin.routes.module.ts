import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'hostels'
  },
  {
    path: 'hostels',
    loadChildren: () => import('./+admin-hostels/admin-hostels.module').then(m => m.AdminHostelsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(moduleRoutes)],
  exports: [RouterModule]
})
export class AdminRoutesModule {
}
