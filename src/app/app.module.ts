import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent } from './app-root.component';
import {AppRoutingModule} from "./app.routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SharedModule} from "@app/shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreErrorHandler} from "./core/core-error-handler";
import {AuthInterceptor} from "@app/interceptors";

@NgModule({
  declarations: [
    AppRootComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CoreErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
