import {Component, OnInit} from '@angular/core';
import {AuthenticationService, ErrorLoggerService, RequestService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import {RequestModel, UserModel} from "@app/models";
import {Subject} from "rxjs";
import * as moment from "moment";

@Component({
  selector: 'page-student-orders-list',
  templateUrl: './page-student-orders-list.component.html',
  styleUrls: ['./page-student-orders-list.component.scss']
})
export class PageStudentOrdersListComponent implements OnInit {

  data!: RequestModel[];
  dataError = true;
  dataLoading = false;

  dataUser: UserModel | null = null;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest$ = new Subject();

  constructor(
    private requestService: RequestService,
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

    this.requestService.getRequests(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((requests: RequestModel[]) => {
        this.data = requests;

        this.data = this.data.map((request: RequestModel) => {
          request.date_created = moment(request.date_created).format('DD.MM.YYYY');
          return request;
        })

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
