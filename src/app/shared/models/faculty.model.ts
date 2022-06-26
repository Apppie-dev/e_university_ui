export class FacultyModel {

  faculty_id: number;
  main_email: string;
  name: string;
  shortname: string;
  university_id: number;



  // Meta Info :: Front Only

  visibilityState?: boolean;
  visibilityMenu?: boolean;
  metaInactive?: boolean;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export class UserFacultyModel {

  faculty: number;
  faculty_name: string;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
