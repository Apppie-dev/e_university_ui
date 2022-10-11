import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecialityModel} from "@app/models";
import {environment} from "@app/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  private backendUrl = `${environment.backendUrl}`;

  constructor(
    private http: HttpClient
  ) {
  }

  getSpecialities(universityId: number): Observable<SpecialityModel[]> {
    const url = `${this.backendUrl}${universityId}/speciality/`;

    return this.http.get<SpecialityModel[]>(url);
  }
}
