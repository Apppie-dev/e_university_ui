import { Component, OnInit } from '@angular/core';
import {FacultyModel, UserModel} from "@app/models";
import {Subject} from "rxjs";
import {AuthenticationService, FacultyService} from "@app/services";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'page-super-admin-faculty-list',
  templateUrl: './page-super-admin-faculty-list.component.html',
  styleUrls: ['./page-super-admin-faculty-list.component.css']
})
export class PageSuperAdminFacultyListComponent implements OnInit {

  faculties!: FacultyModel[];
  facultiesError = true;
  facultiesLoading = false;

  dataUser: UserModel | null = null;

  private unsubscribePage$ = new Subject();
  private unsubscribeRequest$ = new Subject();

  constructor(
    private facultyService: FacultyService,
    private authenticationService: AuthenticationService,
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
    this.loadFaculties();
  }

  loadFaculties(): void {
    this.facultiesLoading = true;
    this.facultiesError = false;
    this.unsubscribeRequest$.next();

    this.facultyService.getFaculties(this.dataUser.university_id)
      .pipe(takeUntil(this.unsubscribeRequest$))
      .subscribe((faculties: FacultyModel[]) => {

        this.faculties = faculties;

        this.facultiesLoading = false;
        this.facultiesError = false;

      }, (error: any) => {
        console.log(error)
        this.facultiesLoading = false;
        this.facultiesError = true;

      });
  }

}
