import {environment} from "@app/environment/environment";
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "@app/models";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor( private http: HttpClient ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  checkUserExist(body: any): Observable<any> {
    const url = `${this.backendUrl}check-student-existance/`;

    return this.http.post<any>(url, body)
  }

  registrationUser(body: any): Observable<any> {
    const url = `${this.backendUrl}registration/`;

    return this.http.post<any>(url, body)
  }

  getSelf(): Observable<any> {
    const url = `${this.backendUrl}me`;

    return this.http.get<any>(url)
  }
}
