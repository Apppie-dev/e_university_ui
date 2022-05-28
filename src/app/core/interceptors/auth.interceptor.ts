import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/services';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private headerAuthName = 'Bearer';

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
  }
}
