export class UserModel {

  id: number;
  login: string;

  firstName: string;
  lastName: string;
  email: string;

  group: null | UserGroupModel;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export class UserGroupModel {

  id: number;
  name: string;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

