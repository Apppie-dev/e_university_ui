import { Component, OnInit } from '@angular/core';
import {FacultyModel, UserModel} from "@app/models";
import {Subject} from "rxjs";
import {AuthenticationService, ErrorLoggerService, FacultyService} from "@app/services";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'page-super-admin-faculty-list',
  templateUrl: './page-super-admin-faculty-list.component.html',
  styleUrls: ['./page-super-admin-faculty-list.component.scss']
})
export class PageSuperAdminFacultyListComponent implements OnInit {

  data!: FacultyModel[];
  dataError = true;
  dataLoading = false;

  dataUser: UserModel | null = null;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest$ = new Subject();

  constructor(
    private facultyService: FacultyService,
    private authenticationService: AuthenticationService,
    private errorLoggerService: ErrorLoggerService
  ) { }

  ngOnInit(): void {
    this.authenticationService.authUserData$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((dataUser: UserModel) => {
        if (dataUser && dataUser.user_id) {
          this.dataUser = dataUser;
          this.loadDataFaculties();
        }
      });
  }

  loadDataFaculties(): void {
    this.dataLoading = true;
    this.dataError = false;
    this.unsubscribeRequest$.next();

    this.facultyService.getFaculties(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((faculties: FacultyModel[]) => {
        this.data = faculties;

        this.dataLoading = false;
        this.dataError = false;

      }, (error: any) => {
        this.dataLoading = false;
        this.dataError = true;

        this.errorLoggerService.logHttpError(error);
      });
  }

}
