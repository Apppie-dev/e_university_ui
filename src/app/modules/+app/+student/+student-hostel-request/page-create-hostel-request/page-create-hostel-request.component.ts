import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {AuthenticationService, ErrorLoggerService, RequestService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import { UserModel} from "@app/models";
import {Router} from "@angular/router";

enum HostelRequestTabs {
  Comment,
  RequestForm
}

@Component({
  selector: 'page-create-hostel-request',
  templateUrl: './page-create-hostel-request.component.html',
  styleUrls: ['./page-create-hostel-request.component.scss']
})

export class PageCreateHostelRequestComponent implements OnInit {

  private unsubscribeRequest$ = new Subject();
  private unsubscribePage$ = new Subject();

  dataUser: UserModel | null = null;

  hostelRequestData!: any;
  hostelRequestLoading!: any;
  hostelRequestError!: any;
  hostelRequestExist!: boolean;

  TABS_LIST = HostelRequestTabs;
  activeTab: HostelRequestTabs = HostelRequestTabs.Comment;

  constructor(
    private requestService: RequestService,
    private authenticationService: AuthenticationService,
    private errorLoggerService: ErrorLoggerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authenticationService.authUserData$
    .pipe(takeUntil(this.unsubscribePage$))
    .subscribe((dataUser: UserModel) => {
      if (dataUser && dataUser.user_id) {
        this.dataUser = dataUser;
        this.loadHostelRequestInfo();
      }
    });
  }

  loadHostelRequestInfo(): void {
    this.hostelRequestLoading = true;
    this.hostelRequestError = false;
    this.unsubscribeRequest$.next();

    this.requestService.getHostelRequestInfo(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((hostelRequest: any) => {
        this.hostelRequestData = hostelRequest;

        this.hostelRequestExist = hostelRequest.user_request_exist;

        if (this.hostelRequestExist) {
          this.router.navigate(['app/student/settlement-hostel/status'])
        }

        this.hostelRequestLoading = false;
        this.hostelRequestError = false;

      }, (error: any) => {
        console.log(error);
        this.hostelRequestLoading = false;
        this.hostelRequestError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }

}
