import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { HostelModel} from "@app/models";
import {environment} from "@app/environment/environment";


@Injectable({
  providedIn: 'root'
})
export class HostelService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  getHostels(universityId: number): Observable<HostelModel[]> {
    const url = `${this.backendUrl}${universityId}/hostels/`;

    return this.http.get<HostelModel[]>(url);
  }
}
