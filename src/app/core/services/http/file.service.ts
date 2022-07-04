import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FileModel} from "@app/models";
import {environment} from "@app/environment/environment";


@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  getFiles(universityId: number): Observable<FileModel[]> {
    const url = `${this.backendUrl}${universityId}/files/`;

    return this.http.get<FileModel[]>(url);
  }
}
