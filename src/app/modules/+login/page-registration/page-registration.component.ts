import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, PageMetaService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageMetaModel, UserModel} from "@app/models";
import {HttpErrorResponse} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";

@Component({
  selector: 'page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.scss']
})
export class PageRegistrationComponent implements OnInit {

  formRegistration: FormGroup;
  formRegistrationError = '';
  formRegistrationLoading = false;

  private returnUrl = '/';

  private pageTitle = 'Login';

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));


    this._initForm();

    // redirect HOME if already logged in
    const authUserData = this.authenticationService.authUserDataValue;

    if (authUserData) {
      // this.router.navigate(['/']);
      // return;
    }
  }

  actionSave(): void {

    if (this.formRegistration.invalid) {
      return;
    }

    this.formRegistrationError = '';
    this.formRegistrationLoading = true;

    console.log(this.formRegistration.value.email)
    console.log(this.formRegistration.value.password)
    console.log(this.formRegistration.value.retype_password)
  }

  private _initForm(): void {
    this.formRegistration = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(SETTINGS_APP.VALIDATION_EMAIL),
      ]],
      password: ['', [
        Validators.required,
      ]],
      retype_password: ['', [
        Validators.required,
      ]],
    });
  }
}
