import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  CorePaginationComponent,
  CoreSidebarComponent,
  CoreUserMenuComponent,

  FormFieldErrorsComponent,
} from './components';
import { AppClickOutsideDirective, AppRolesDirective} from './directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AppClickOutsideDirective,
    AppRolesDirective,

    CoreSidebarComponent,
    CorePaginationComponent,
    CoreUserMenuComponent,

    FormFieldErrorsComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    AppClickOutsideDirective,
    AppRolesDirective,

    CoreSidebarComponent,
    CorePaginationComponent,
    CoreUserMenuComponent,

    FormFieldErrorsComponent,
  ],
  providers: []
})
export class SharedModule {
}
