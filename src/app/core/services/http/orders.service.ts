import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@app/environment/environment";


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(
    private http: HttpClient
  ) {
  }

  private backendUrl = `${environment.backendUrl}`;
}
