import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { SETTINGS_APP } from '@app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authUserData = this.authenticationService.authUserDataValue;

    if (authUserData && authUserData.access_token) {
      return true;
    }

    this.router.navigate([SETTINGS_APP.URL_LOGIN]);
    return false;
  }

}
