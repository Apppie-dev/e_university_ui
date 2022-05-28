import { Injectable } from '@angular/core';
import { UserGroupModel } from '@app/models';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  static checkRole(userGroup: UserGroupModel | null, userRoles: number[] = []): boolean {
    return userGroup && userGroup.hasOwnProperty('id') ? userRoles.indexOf(userGroup.id) !== -1 : false;
  }

}
