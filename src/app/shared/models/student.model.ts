export enum StudentEducationLevelModel {
  'B' = 'B',
  'M' = 'M'
}

export class StudentModel {
  student_id?: number
  user_id?: number
  full_name?: string
  student_full_name?: string
  telephone_number: string
  university_id?: number
  faculty_id: number
  speciality_id: number
  course_id: number
  gender: string
}
