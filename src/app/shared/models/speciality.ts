export class SpecialityModel {

  faculty_id: number
  speciality_id: number
  university_id: number

  speciality_info: {
    code: number,
    full_name: string
  }

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
