import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "@app/models";
import {environment} from "@app/environment/environment";


@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  constructor(
    private http: HttpClient
  ) {

  }

  private backendUrl = `${environment.backendUrl}`;

  createFaculty(body: any, universityId: string): Observable<any> {
    const url = `${this.backendUrl}${universityId}/faculties/`;

    return this.http.post<any>(url, body);
  }
}
