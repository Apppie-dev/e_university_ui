import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, PageMetaService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {PageMetaModel, UserModel} from "@app/models";
import {HttpErrorResponse} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {UsersService} from "@app/services";

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
    private usersService: UsersService,
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
    if (this.formCheckUser.invalid) {
      return;
    }

    this.formCheckUserError = '';
    this.formCheckUserLoading = true;

    const body = {
      full_name: this.formCheckUser.value.username,
      telephone_number: '380' + this.formCheckUser.value.phone
    }

    this.usersService.checkUserExist(body)
      .subscribe((data) => {
        this.router.navigate([`login/registration`], {queryParams: {token: data.token}})
      }, (error: HttpErrorResponse) => {
      });
  }

  private _initForm(): void {
    this.formCheckUser = this.formBuilder.group({
      username: ['', [
      ]],
      phone: ['', [
      ]],
    });
  }
}
