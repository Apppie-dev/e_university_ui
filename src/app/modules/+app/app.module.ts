import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes.module';
import { PageAppComponent } from './page-app/page-app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import {NotifierModule} from "angular-notifier";

@NgModule({
  declarations: [
    PageAppComponent,
  ],
  imports: [
    AppRoutesModule,
    CommonModule,
    SharedModule,


    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 20
        },
        vertical: {
          position: 'top',
          distance: 20,
          gap: 10
        }
      },
      behaviour: {
        stacking: 4,
        autoHide: false,
        onMouseover: 'pauseAutoHide'
      }
    })
  ]
})
export class AppModule {
}
