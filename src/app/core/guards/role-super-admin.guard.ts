import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthenticationService, RolesService, UiNotifierService } from '@app/services';
import { Observable } from 'rxjs';
import { UserModel } from '@app/models';
import { SETTINGS_NOTIFICATION } from '@app/constants';

@Injectable({
  providedIn: 'root'
})
export class RoleSuperAdminGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private uiNotifierService: UiNotifierService,
    private router: Router,
  ) {
  }

  canActivate(): any {
    return false;
  }
}
