import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../common/local-storage.service";
import {SETTINGS_APP} from "@app/constants";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "@app/models";
import {environment} from "@app/environment/environment";


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
  private unsubscribeRequest$ = new Subject();

  private backendUrl = `${environment.backendUrl}`;

  login(username: string, password: string, rememberMe: boolean): any {
    const url = `${this.backendUrl}authenticate`;
    const body = {username, password};

    console.log(body);
  }
}
