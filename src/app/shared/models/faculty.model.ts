export class FacultyModel {

  id: number;
  name: string;
  short_name: string;
  main_name: string;
  hostel_department_name: string;

  university_id: number;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
