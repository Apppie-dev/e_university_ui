import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Unsubscribe } from '@app/decorators';
import { filter, takeUntil } from 'rxjs/operators';
import { UserModel, UserRoleModel} from '@app/models';
import { AuthenticationService, RolesService } from '@app/services';
import { Subject } from 'rxjs';


@Directive({
  selector: '[appRoles]'
})
@Unsubscribe()
export class AppRolesDirective implements OnInit {

  @Input('appRoles') allowPermission!: string;

  private unsubscribe$ = new Subject();

  constructor(
    private authenticationService: AuthenticationService,
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<Element>,
  ) {
  }

  ngOnInit(): void {

    this.authenticationService.authUserData$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((userModel: UserModel | null) => Boolean(userModel)),
      )
      .subscribe((dataUser: UserModel) => {
        const userGroup = dataUser.role[0] || null;
        if (this.allowPermission && typeof this[this.allowPermission] === 'function') {
          if (userGroup && this[this.allowPermission](userGroup)) {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      });
  }

  private isStudent(userGroup: UserRoleModel | null): boolean {
    return RolesService.isStudentRole(userGroup);
  }


  private isAdmin(userGroup: UserRoleModel | null): boolean {
    return RolesService.isAdminRole(userGroup);
  }

  private isSuperAdmin(userGroup: UserRoleModel | null): boolean {
    return RolesService.isSuperAdminRole(userGroup);
  }

}
