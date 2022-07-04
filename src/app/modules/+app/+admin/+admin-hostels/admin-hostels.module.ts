import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {AdminHostelsRoutesModule} from "./admin-hostels.routes.module";
import {PageAdminHostelsListComponent} from "./page-admin-hostels-list/page-admin-hostels-list.component";

@NgModule({
  declarations: [
    PageAdminHostelsListComponent
  ],
  imports: [
    CommonModule,
    AdminHostelsRoutesModule,
    SharedModule,

  ]
})
export class AdminHostelsModule {
}
