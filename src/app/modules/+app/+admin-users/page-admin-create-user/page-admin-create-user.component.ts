import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PageMetaModel} from "@app/models";
import {AuthenticationService, PageMetaService, UiNotifierService} from "@app/services";
import {Observable} from "rxjs";
import { UsersService} from "../../../../core/services/http/users";

@Component({
  selector: 'app-page-admin-create-user',
  templateUrl: './page-admin-create-user.component.html',
  styleUrls: ['./page-admin-create-user.component.scss']
})
export class PageAdminCreateUserComponent implements OnInit {

  adminCreateUserForm!: FormGroup;
  adminCreateUserFormError = false;
  adminCreateUserFormLoading = false;

  private pageTitle = 'Create User'

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
/*    private usersService: UsersService,*/
    private uiNotifierService: UiNotifierService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));
    this._initForm();
  }

  actionSave():void {
    /*if (this.adminCreateUserForm.valid) return;   that code block console output*/

    const body = {
      login: this.adminCreateUserForm.value.login,
      email: this.adminCreateUserForm.value.email
    }

    /*this.usersService.createUser(body)
      .subscribe((user) => {
        console.log(user);
      })*/
    console.log(body)
  }

  private _initForm():void {
    this.adminCreateUserForm = this.formBuilder.group({
      login: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required
      ]]
    })
  }

}
