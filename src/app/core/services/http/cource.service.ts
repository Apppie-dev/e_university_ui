import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseModel} from "@app/models";
import {environment} from "@app/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private backendUrl = `${environment.backendUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getCourses(): Observable<CourseModel[]> {
    const url = `${this.backendUrl}courses/`;

    return this.http.get<CourseModel[]>(url);
  }
}
