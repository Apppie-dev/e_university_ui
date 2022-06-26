import {Injectable} from '@angular/core';
import {UserRoleModel} from "@app/shared/models/user.model";
import {USER_ROLES_GROUPS} from "@app/constants";


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  static isAdminRole(userGroup: UserRoleModel | null): boolean {
    const userRoles = USER_ROLES_GROUPS.get('isAdmin') || [];
    return RolesService.checkRole(userGroup, userRoles);
  }

  static isStudentRole(userGroup: UserRoleModel | null): boolean {
    const userRoles = USER_ROLES_GROUPS.get('isStudent') || [];
    return RolesService.checkRole(userGroup, userRoles);
  }

  static isSuperAdminRole(userGroup: UserRoleModel | null): boolean {
    const userRoles = USER_ROLES_GROUPS.get('isSuperAdmin') || [];
    return RolesService.checkRole(userGroup, userRoles);
  }

  static checkRole(userGroup: UserRoleModel | null, userRoles: number[] = []): boolean {
    return userGroup && userGroup.hasOwnProperty('role') ? userRoles.indexOf(userGroup.role) !== -1 : false;
  }
}
