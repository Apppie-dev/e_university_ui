import { Injectable } from '@angular/core';
import {UserRole} from '@app/models';


@Injectable({
  providedIn: 'root'
})
export class RolesService {

  static checkRole(userGroup: UserRole | null, userRoles: number[] = []): boolean {
    // return userGroup && userGroup.hasOwnProperty('id') ? userRoles.indexOf(userGroup.id) !== -1 : false;
    return true;
  }

}
