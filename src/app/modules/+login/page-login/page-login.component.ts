import { Component, OnInit } from '@angular/core';
import {AuthenticationService, PageMetaService, UiNotifierService} from '@app/services';
import { PageMetaModel } from '@app/shared/models/page-meta.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "@app/models";
import {SETTINGS_APP, SETTINGS_NOTIFICATION} from "@app/constants";

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  formLogin!: FormGroup;
  formLoginError = '';
  formLoginLoading = false;

  private returnUrl = '/';

  private pageTitle = 'Login';

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private uiNotifierService: UiNotifierService
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

    if (this.formLogin.invalid) {
      return;
    }

    this.formLoginError = '';
    this.formLoginLoading = true;

    this.authenticationService.login(this.formLogin.value.login, this.formLogin.value.password)
      .subscribe((data: any) => {
        this.formLoginLoading = false;
        this.router.navigate(['/']);
      }, (error: HttpErrorResponse) => {
        this.formLoginLoading = false;
        console.log(error)

        this.formLoginError = 'Unable to log in with provided credentials';
      });
  }

  private _initForm(): void {
    this.formLogin = this.formBuilder.group({
      login: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
  }
}
