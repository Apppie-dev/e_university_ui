import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../common/local-storage.service";
import {SETTINGS_APP} from "@app/constants";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "@app/models";
import {environment} from "@app/environment/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    const storageUserData = this.localStorageService.getRecord(SETTINGS_APP.STORE_DATA_KEYS.AUTH);

    this.authUserDataSubject = new BehaviorSubject<UserModel>(storageUserData);
    this.authUserData$ = this.authUserDataSubject.asObservable();
  }

  public get authUserDataValue(): UserModel | null {
    return this.authUserDataSubject.value;
  }

  authUserData$: Observable<UserModel | null>;
  private authUserDataSubject: BehaviorSubject<UserModel | null>;

  private backendUrl = `${environment.backendUrl}`;

  login(username: string, password: string): Observable<UserModel> {
    const url = `${this.backendUrl}authenticate`;
    const body = {username, password};

    return this.http.post<UserModel | null>(url, body)
      .pipe(map((userData: any) => {
        this.updateUser(userData);
        return userData;
      }));
  }

  checkUserExist(body: any): Observable<UserModel> {
    const url = `${this.backendUrl}check-student-existance/`;

    return this.http.post<UserModel | null>(url, body)
  }


  updateUser(user?: UserModel | null): void {
    const userValue = user || this.authUserDataSubject.value;
    this.authUserDataSubject.next(userValue);
  }
}
