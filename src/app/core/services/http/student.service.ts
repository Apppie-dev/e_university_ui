import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentModel} from "@app/models";
import {environment} from "@app/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private backendUrl = `${environment.backendUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getStudents(universityId: number): Observable<StudentModel[]> {
    const url = `${this.backendUrl}${universityId}/students/`;

    return this.http.get<StudentModel[]>(url);
  }

  createStudent(universityId: number, body: StudentModel): Observable<StudentModel> {
    const url = `${this.backendUrl}${universityId}/students/`;
    return this.http.post<StudentModel>(url, body)
  }
}
