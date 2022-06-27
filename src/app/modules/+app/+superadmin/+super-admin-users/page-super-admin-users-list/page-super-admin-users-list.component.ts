import { Component, OnInit } from '@angular/core';
import {FacultyModel, UserModel} from "@app/models";
import {Subject} from "rxjs";
import {AuthenticationService, ErrorLoggerService, UsersService} from "@app/services";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'page-admin-user-list',
  templateUrl: './page-super-admin-users-list.component.html',
  styleUrls: ['./page-super-admin-users-list.component.scss']
})
export class PageSuperAdminUsersListComponent implements OnInit {

  data!: UserModel[];
  dataError = true;
  dataLoading = false;

  dataUser: UserModel | null = null;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest$ = new Subject();

  constructor(
    private usersService: UsersService,
    private authenticationService: AuthenticationService,
    private errorLoggerService: ErrorLoggerService
  ) { }

  ngOnInit(): void {
    this.authenticationService.authUserData$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((dataUser: UserModel) => {
        if (dataUser && dataUser.user_id) {
          this.dataUser = dataUser;
          this.loadDataUsers();
        }
      });
  }

  loadDataUsers(): void {
    this.dataLoading = true;
    this.dataError = false;
    this.unsubscribeRequest$.next();

    this.usersService.getUsers(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((users: UserModel[]) => {
        this.data = users;

        this.dataLoading = false;
        this.dataError = false;

      }, (error: any) => {
        this.dataLoading = false;
        this.dataError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }

}
