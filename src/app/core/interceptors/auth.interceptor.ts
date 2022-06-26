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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const authUserData = this.authenticationService.authUserDataValue;

    if (authUserData && authUserData.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.headerAuthName} ${authUserData.access_token}`,
        }
      });
    }

    return next.handle(request);
  }
}
