import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SETTINGS_APP} from "@app/constants";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {FacultyModel, UserModel} from "@app/models";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  createFaculty(universityId: number, body: Partial<FacultyModel>): Observable<FacultyModel> {
    const url = `${this.backendUrl}${universityId}/faculties/`;

    return this.http.post<FacultyModel>(url, body);
  }

  getFaculties(universityId: number): Observable<FacultyModel[]> {
    const url = `${this.backendUrl}${universityId}/faculties/`;

    return this.http.get<FacultyModel[]>(url);
  }
}
