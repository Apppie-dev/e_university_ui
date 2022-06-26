import {UserFacultyModel} from "@app/shared/models/faculty.model";

export class UserModel {

  user_id: number;
  university_id: number;

  login: string;
  email: string;

  access_token: string;
  refresh_token: string;

  last_visit: string;

  role: null | UserRoleModel[];
  faculties: UserFacultyModel[];

  is_active: boolean;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export class UserRoleModel {

  role: number;
  role_name: string;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

