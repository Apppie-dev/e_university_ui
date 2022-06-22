import {environment} from "@app/environment/environment";
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor( private http: HttpClient ) {
  }

 /* private backendUrl = 'https://jsonplaceholder.typicode.com/posts'

  createUser(body): Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/posts";

    return this.http.post<any>(url, body);
  }*/

}
