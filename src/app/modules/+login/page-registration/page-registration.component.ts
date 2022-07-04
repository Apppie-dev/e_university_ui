import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, PageMetaService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageMetaModel} from "@app/models";
import {SETTINGS_APP} from "@app/constants";
import {UsersService} from "@app/services";

@Component({
  selector: 'page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.scss']
})
export class PageRegistrationComponent implements OnInit {

  token = '';

  formRegistration: FormGroup;
  formRegistrationError = false;
  formRegistrationLoading = false;

  private returnUrl = '/';

  private pageTitle = 'Login';

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private usersService: UsersService,
  ) {
    this._initForm();
  }


  get form() {
    return this.formRegistration.controls;
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParams ? this.route.snapshot.queryParams[SETTINGS_APP.URL_TOKEN_KEY] : null;
    {
      !this.token ? this.form.email.disable() : this.form.email.enable();
      !this.token ? this.form.password.disable() : this.form.password.enable();
      !this.token ? this.form.retype_password.disable() : this.form.retype_password.enable();
    }

    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));

    // redirect HOME if already logged in
    const authUserData = this.authenticationService.authUserDataValue;

    if (authUserData && authUserData.access_token) {
      this.router.navigate(['/']);
      return;
    }
  }

  actionSave(): void {

    if (this.formRegistration.invalid) {
      return;
    }

    this.formRegistrationError = false;
    this.formRegistrationLoading = true;

    const body = {
      token: this.token,
      email: this.formRegistration.value.email,
      password: this.formRegistration.value.password,
      password_re_check: this.formRegistration.value.retype_password,
    }

    this.usersService.registrationUser(body)
      .subscribe((data: any) => {
        this.router.navigate([SETTINGS_APP.URL_LOGIN]);

        this.formRegistrationLoading = false;
      }, (error: any) => {
        console.log(error);
        this.formRegistrationError = true;
        this.formRegistrationLoading = false;
      })
  }

  private _initForm(): void {
    this.formRegistration = this.formBuilder.group({
      email: [{value: '', disabled: true}, [
        Validators.required,
      ]],
      password: [{value: '', disabled: true}, [
        Validators.required,
      ]],
      retype_password: [{value: '', disabled: true}, [
        Validators.required,
      ]],
    });
  }
}
