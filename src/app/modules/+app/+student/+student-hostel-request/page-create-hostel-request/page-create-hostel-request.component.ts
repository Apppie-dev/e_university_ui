import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {AuthenticationService, ErrorLoggerService, NameCasesService, RequestService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import {HostelRequestModel, StudentEducationLevelModel, UserModel} from "@app/models";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-create-hostel-request',
  templateUrl: './page-create-hostel-request.component.html',
  styleUrls: ['./page-create-hostel-request.component.scss']
})

export class PageCreateHostelRequestComponent implements OnInit {

  private unsubscribeRequest$ = new Subject();
  private unsubscribeHostelRequestInfoRequest$ = new Subject();
  private unsubscribePage$ = new Subject();

  dataUser: UserModel | null = null;

  hostelRequestData!: any;
  hostelRequestLoading!: boolean;
  hostelRequestError!: boolean;

  hostelRequestExist!: boolean;

  hostelRequestInfoData!: HostelRequestModel;
  hostelRequestInfoLoading!: boolean;
  hostelRequestInfoError!: boolean;

  hostelRequestFormComment: FormGroup;

  studentFullNameInGenitive!: any;
  rectorFullNameInDative!: any;
  STUDENT_EDUCATION_LEVELS = StudentEducationLevelModel;

  constructor(
    private requestService: RequestService,
    private authenticationService: AuthenticationService,
    private errorLoggerService: ErrorLoggerService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authUserData$
    .pipe(takeUntil(this.unsubscribePage$))
    .subscribe((dataUser: UserModel) => {
      if (dataUser && dataUser.user_id) {
        this.dataUser = dataUser;
        this.loadHostelRequestExistence();
      }
    });
  }

  loadHostelRequestExistence(): void {
    this.hostelRequestLoading = true;
    this.hostelRequestError = false;
    this.unsubscribeRequest$.next();

    this.requestService.getHostelRequestExistence(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((hostelRequest: any) => {
        this.hostelRequestData = hostelRequest;

        this.hostelRequestExist = hostelRequest.user_request_exist;

        this.hostelRequestLoading = false;
        this.hostelRequestError = false;


        if (this.hostelRequestExist) {
          this.router.navigate(['app/student/settlement-hostel/status'])
        } else {
          this.loadHostelRequestInfo();
        }

      }, (error: any) => {
        this.hostelRequestLoading = false;
        this.hostelRequestError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }


  loadHostelRequestInfo(): void {
    this.hostelRequestInfoLoading = true;
    this.hostelRequestInfoError = false;
    this.unsubscribeHostelRequestInfoRequest$.next();

    this.requestService.getHostelRequestBookingInfo(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeHostelRequestInfoRequest$))
      .subscribe((hostelRequestInfo: HostelRequestModel) => {
        this.hostelRequestInfoData = hostelRequestInfo;


        this.studentFullNameInGenitive = NameCasesService.buildNameGenetive(hostelRequestInfo.full_name);
        this.rectorFullNameInDative = NameCasesService.buildNameDative(hostelRequestInfo.rector_full_name);

        this._initForm();

        this.hostelRequestInfoLoading = false;
        this.hostelRequestInfoError = false;
      }, (error: any) => {
        this.hostelRequestInfoLoading = false;
        this.hostelRequestInfoError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }


  actionSave(): void {

    const body = {
      comment: this.hostelRequestFormComment.value.comment,
      service_id: 1 //todo:: hostel service id temp
    }

    this.requestService.createHostelRequest(this.dataUser.university_id, body)
      .subscribe(() => {
        this.router.navigate(['app/student/settlement-hostel/status'])
      }, (error: any) => {
        this.errorLoggerService.logHttpError(error);
      });
  }

  private _initForm(): void {
    this.hostelRequestFormComment = this.formBuilder.group({
      comment: ['', []]
    });
  }
}

