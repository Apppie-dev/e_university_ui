import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalStorageService} from "../common/local-storage.service";
import {SETTINGS_APP} from "@app/constants";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {UserModel} from "@app/models";
import {environment} from "@app/environment/environment";
import {filter, map, takeUntil} from "rxjs/operators";
import {UsersService} from "./users.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private unsubscribeRequest$ = new Subject();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private userService: UsersService,
    private router: Router
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
    const url = `${this.backendUrl}login`;
    const body = "username=" + username + "&password=" + password;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post<UserModel | null>(url, body, {headers: headers})
      .pipe(map((dataUser: any) => {
        this.updateUser(dataUser);
        return dataUser;
      }));
  }

  logout(): Observable<any> {
    this.localStorageService.clearStorage(true);
    this.authUserDataSubject.next(null);
    return of(true);
  }

  updateUser(user?: UserModel | null): void {
    const userValue = user || this.authUserDataSubject.value;

    this.userService.getSelf(userValue.access_token)
      .pipe(
        takeUntil(this.unsubscribeRequest$),
        filter((userModel: UserModel | null) => Boolean(userModel)),
      )
      .subscribe((data: any) => {
        const userFullData = {...userValue, ...data};
        this.localStorageService.setRecord(SETTINGS_APP.STORE_DATA_KEYS.AUTH, userFullData);

        // todo:: temp fix update view
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([this.router.url]);
        });

        this.authUserDataSubject.next(userFullData);
      })
  }

}
