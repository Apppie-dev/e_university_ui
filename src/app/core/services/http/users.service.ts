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

 private backendUrl = `${environment.backendUrl}`

}
