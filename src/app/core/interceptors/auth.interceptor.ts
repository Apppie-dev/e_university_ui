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
    // add authorization header with basic auth credentials if available
    const authUserData = this.authenticationService.authUserDataValue;

    if (authUserData) {
      request = request.clone({
        setHeaders: {
        }
      });
    }

    return next.handle(request);
  }
}
