export class UserModel {

  id: number;
  login: string;

  access_token: string;

  last_visit: string;
  password: string;
  email: string;

  role: null | UserRoleModel[];
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

