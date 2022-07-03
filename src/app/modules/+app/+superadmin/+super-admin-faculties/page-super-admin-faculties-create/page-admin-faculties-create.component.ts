import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FacultyModel, PageMetaModel, UserModel} from "@app/models";
import {AuthenticationService, FacultyService, PageMetaService, UiNotifierService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'page-admin-faculties-create',
  templateUrl: './page-admin-faculties-create.component.html',
  styleUrls: ['./page-admin-faculties-create.component.scss']
})

export class PageAdminFacultiesCreateComponent implements OnInit {

  dataUser: UserModel | null = null;

  createFacultyForm!: FormGroup;
  createFacultyFormError = false;
  createFacultyFormLoading = false;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest = new Subject();

  private pageTitle = 'Faculty Editor'

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private facultyService: FacultyService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));

    this.authenticationService.authUserData$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((dataUser: UserModel) => {
        if (dataUser && dataUser.user_id) {
          this.dataUser = dataUser;
          this._initForm();
        }
      });
  }

  actionSave(): void {
    if (this.createFacultyForm.invalid) {
      return;
    }

    const body = {
      university_id: 1,
      name: this.createFacultyForm.value.name,
      main_email: this.createFacultyForm.value.email,
      shortname: this.createFacultyForm.value.shortName,
    }

    this.facultyService.createFaculty(this.dataUser.university_id, body)
      .pipe(takeUntil(this.unsubscribeRequest))
      .subscribe((data: FacultyModel) => {
      }, (error) => {
        console.log(error);
      })
  }

  private _initForm(): void {
    this.createFacultyForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      shortName: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required
      ]],
    });
  }

}
