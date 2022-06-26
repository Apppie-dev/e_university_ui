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
export class RoleStudentGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private uiNotifierService: UiNotifierService,
    private router: Router,
  ) {
  }

  canActivate(): any {
    return this.authenticationService.authUserData$
      .pipe(
        filter((userModel: UserModel | null) => Boolean(userModel)),
        map((userModel: any | null) => {

          const userRole = userModel ? userModel.role[0] : null;

          if (userRole && RolesService.isStudentRole(userRole)) {
            return true;
          }

          this.uiNotifierService.showWithDelay('error', SETTINGS_NOTIFICATION.TEXT.ERROR_PERMISSION_PAGE);
          this.router.navigate(['/']);

          return false;
        })
      );
  }
}
