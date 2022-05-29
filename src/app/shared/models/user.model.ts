export class UserModel {

  id: number;
  login: string;

  last_visit: string;
  password: string;
  email: string;

  role_id: null | UserRole;
  is_active: boolean;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export enum UserRole {
  Student = 0,
  Admin = 1,
  Superadmin = 2
}

