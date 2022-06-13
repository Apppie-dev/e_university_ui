import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, PageMetaService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageMetaModel, UserModel} from "@app/models";
import {HttpErrorResponse} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";

@Component({
  selector: 'page-check-exist-user',
  templateUrl: './page-check-exist-user.component.html',
  styleUrls: ['./page-check-exist-user.component.scss']
})
export class PageCheckExistUserComponent implements OnInit {

  formCheckUser!: FormGroup;
  formCheckUserError = '';
  formCheckUserLoading = false;

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

    if (this.formCheckUser.invalid) {
      return;
    }

    this.formCheckUserError = '';
    this.formCheckUserLoading = true;

  }

  private _initForm(): void {
    this.formCheckUser = this.formBuilder.group({
      username: ['', [
        Validators.required,
      ]],
      phone: ['', [
        Validators.required,
        Validators.maxLength(9),
        Validators.minLength(9)
      ]],
    });
  }
}
