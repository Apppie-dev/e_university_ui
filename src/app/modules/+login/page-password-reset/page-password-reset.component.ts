import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, PageMetaService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageMetaModel, UserModel} from "@app/models";
import {HttpErrorResponse} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";

@Component({
  selector: 'page-password-reset',
  templateUrl: './page-password-reset.component.html',
  styleUrls: ['./page-password-reset.component.scss']
})
export class PagePasswordResetComponent implements OnInit {

  formResetPassword!: FormGroup;
  formResetPasswordError = '';
  formResetPasswordLoading = false;

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

    if (authUserData && authUserData.access_token) {
      this.router.navigate(['/']);
      return;
    }
  }

  actionSave(): void {

    if (this.formResetPassword.invalid) {
      return;
    }

    this.formResetPasswordError = '';
    this.formResetPasswordLoading = true;
  }

  private _initForm(): void {
    this.formResetPassword = this.formBuilder.group({
      password: ['', [
        Validators.required,
      ]],
      retype_password: ['', [
        Validators.required,
      ]],
    });
  }
}
