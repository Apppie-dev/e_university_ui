import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  CorePaginationComponent,
  CoreSidebarComponent,
  CoreUserMenuComponent,
  ElementTableStudentRequestsComponent,
  ElementTableFacultiesComponent,
  ElementTableUsersComponent,
  ElementUniversityLogoComponent,
  FormFieldErrorsComponent,
} from './components';
import { AppClickOutsideDirective, AppRolesDirective} from './directive';
import {AppPasswordInputDirective} from "@app/shared/directive/app-password-input.directive";


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
    AppPasswordInputDirective,

    CoreSidebarComponent,
    CorePaginationComponent,
    CoreUserMenuComponent,

    ElementTableFacultiesComponent,
    ElementUniversityLogoComponent,
    ElementTableUsersComponent,
    ElementTableStudentRequestsComponent,

    FormFieldErrorsComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    AppClickOutsideDirective,
    AppRolesDirective,
    AppPasswordInputDirective,

    CoreSidebarComponent,
    CorePaginationComponent,
    CoreUserMenuComponent,

    ElementTableFacultiesComponent,
    ElementUniversityLogoComponent,
    ElementTableUsersComponent,
    ElementTableStudentRequestsComponent,

    FormFieldErrorsComponent,
  ],
  providers: []
})
export class SharedModule {
}
