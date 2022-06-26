import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PageMetaModel, UserModel} from "@app/models";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService, FacultyService, PageMetaService, UiNotifierService} from "@app/services";
import {ActivatedRoute, Router} from "@angular/router";
import {SETTINGS_APP} from "@app/constants";

@Component({
  selector: 'page-admin-faculties-create',
  templateUrl: './page-admin-faculties-create.component.html',
  styleUrls: ['./page-admin-faculties-create.component.scss']
})

export class PageAdminFacultiesCreateComponent implements OnInit {

  createFacultyForm!: FormGroup;
  createFacultyFormError = false;
  createFacultyFormLoading = false;

  private pageTitle = 'Faculty Editor'

  constructor(
    private pageMetaService: PageMetaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private facultyService: FacultyService,
    private uiNotifierService: UiNotifierService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));
    this._initForm();
  }

  actionSave(): void {
    if (this.createFacultyForm.invalid) {
      return;
    }

    const body = {
      university_id: 0,
      name: this.createFacultyForm.value.name,
      main_email: this.createFacultyForm.value.email,
      shortname: this.createFacultyForm.value.shortName,
      hostel_email: this.createFacultyForm.value.hostelEmail
    }

    this.facultyService.createFaculty(body, "0")
      .subscribe( (faculty) => {
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
      hostelEmail: ['', [
        Validators.required,
      ]],
    });
  }

}
