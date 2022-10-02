import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HostelRequestModel} from "@app/shared/models/request.model";


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;

  getHostelRequestExistence(universityId: number): Observable<any> {
    const url = `${this.backendUrl}${universityId}/user-request-existence/${1}`;
    // todo:: 1 - hostel request hardcode

    return this.http.get<any>(url)
  }

  getRequests(universityId: number): Observable<HostelRequestModel[]> {
    const url = `${this.backendUrl}${universityId}/user-request/`;
    return this.http.get<HostelRequestModel[]>(url)
  }

  getHostelRequestBookingInfo(universityId: number): Observable<HostelRequestModel> {
    const url = `${this.backendUrl}${universityId}/user-request-booking-hostel/`;
    return this.http.get<HostelRequestModel>(url)
  }

  createHostelRequest(universityId: number, body: any): Observable<HostelRequestModel> {
    const url = `${this.backendUrl}${universityId}/user-request/`;
    return this.http.post<HostelRequestModel>(url, body)
  }
}
