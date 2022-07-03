import {HttpClient} from "@angular/common/http";
import {environment} from "@app/environment/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestModel} from "@app/shared/models/request.model";


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  getHostelRequestInfo(universityId: number): Observable<any> {
    const url = `${this.backendUrl}${universityId}/user-request-existence/${1}`;
    // todo:: 1 - hostel request hardcode

    return this.http.get<any>(url)
  }

  getRequests(universityId: number): Observable<RequestModel[]> {
    const url = `${this.backendUrl}${universityId}/user-request/`;
    return this.http.get<RequestModel[]>(url)
  }
}
