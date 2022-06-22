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
  Student = 1,
  Admin = 2,
  Superadmin = 3
}

