import { Component, OnInit } from '@angular/core';
import {HostelModel, HostelRequestModel, UserModel} from "@app/models";
import {Subject} from "rxjs";
import {AuthenticationService, ErrorLoggerService, HostelService, RequestService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import * as moment from "moment";

@Component({
  selector: 'page-admin-hostels-list',
  templateUrl: './page-admin-hostels-list.component.html',
  styleUrls: ['./page-admin-hostels-list.component.scss']
})
export class PageAdminHostelsListComponent implements OnInit {

  data!: HostelModel[];
  dataError = true;
  dataLoading = false;

  dataUser: UserModel | null = null;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest$ = new Subject();

  constructor(
    private hostelService: HostelService,
    private authenticationService: AuthenticationService,
    private errorLoggerService: ErrorLoggerService
  ) { }

  ngOnInit(): void {
    this.authenticationService.authUserData$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((dataUser: UserModel) => {
        if (dataUser && dataUser.user_id) {
          this.dataUser = dataUser;
          this.loadData();
        }
      });
  }

  loadData(): void {
    this.dataLoading = true;
    this.dataError = false;
    this.unsubscribeRequest$.next();

    this.hostelService.getHostels(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((requests: HostelModel[]) => {
        this.data = requests;

        this.dataLoading = false;
        this.dataError = false;

      }, (error: any) => {
        console.log(error);
        this.dataLoading = false;
        this.dataError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }

}
