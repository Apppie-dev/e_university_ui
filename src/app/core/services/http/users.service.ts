import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "@app/models";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor( private http: HttpClient ) {
  }

  private backendUrl = `${environment.backendUrl}`;
  private headerAuthName = 'Bearer';

  checkUserExist(body: any): Observable<any> {
    const url = `${this.backendUrl}check-student-existance/`;

    return this.http.post<any>(url, body)
  }

  registrationUser(body: any): Observable<any> {
    const url = `${this.backendUrl}registration/`;

    return this.http.post<any>(url, body)
  }

  getSelf(accessToken: string): Observable<any> {
    const url = `${this.backendUrl}me`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `${this.headerAuthName} ${accessToken}`);

    return this.http.get<any>(url, {headers: headers})
  }

  getUsers(universityId: number): Observable<UserModel[]> {
    const url = `${this.backendUrl}${universityId}/users/`;

    return this.http.get<UserModel[]>(url)
  }
}
