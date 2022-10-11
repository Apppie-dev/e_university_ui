import {Component, OnInit} from "@angular/core";
import {CourseModel, FacultyModel, SpecialityModel, UserGenderModel, UserModel} from "@app/models";
import {
  AuthenticationService,
  CourseService,
  ErrorLoggerService,
  FacultyService,
  SpecialtyService, StudentService
} from "@app/services";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-admin-users-create',
  templateUrl: `./page-admin-users-create.component.html`,
  styleUrls: [`page-admin-users-create.component.scss`]
})
export class PageAdminUsersCreateComponent implements OnInit {
  USER_GENDER_MODEL = UserGenderModel

  faculties?: FacultyModel[]
  specialities?: SpecialityModel[]
  courses?: CourseModel[]
  genders = Object.values(this.USER_GENDER_MODEL)

  selectedGender: string
  selectedFaculty: FacultyModel
  selectedSpeciality: SpecialityModel
  selectedCourse: CourseModel

  formUserCreate: FormGroup

  dataError = true;
  dataLoading = false;

  private universityId: number

  constructor(
    private courseService: CourseService,
    private facultyService: FacultyService,
    private specialtyService: SpecialtyService,
    private errorLoggerService: ErrorLoggerService,
    private authenticationService: AuthenticationService,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.authenticationService.authUserData$
      .subscribe((dataUser: UserModel) => {
        if (dataUser && dataUser.user_id) {
          this.universityId = dataUser.university_id;
          this._loadData(dataUser.user_id);
        }
      });

    this._initForm()
  }

  onSubmit() {
    const form = this.formUserCreate.value

    const body = {
      full_name: `${form.lastName} ${form.firstName} ${form.middleName}`,
      telephone_number: `380${form.phone}`,
      course_id: form.course.course_id,
      faculty_id: form.faculty.faculty_id,
      speciality_id: form.speciality.speciality_id,
      gender: form.gender,
    }

    this.studentService.createStudent(this.universityId, body)
      .subscribe(
        () => this.formUserCreate.reset(),
        error => this.errorLoggerService.logHttpError(error)
      )

  }

  private _loadData(universityId: number): void {
    this.dataLoading = true;
    this.dataError = false;

    this.courseService.getCourses()
      .subscribe(
        (courses: CourseModel[]) => this._insertData('courses', courses),
        error => this._handleError(error)
      )

    this.facultyService.getFaculties(universityId)
      .subscribe(
        (faculties: FacultyModel[]) => this._insertData('faculties', faculties),
        error => this._handleError(error)
      )

    this.specialtyService.getSpecialities(universityId)
      .subscribe(
        (specialities: SpecialityModel[]) => this._insertData('specialities', specialities),
        error => this._handleError(error)
      )

  }

  private _handleError(error): void {
    this.dataLoading = false;
    this.dataError = true;
    this.errorLoggerService.logHttpError(error)
  }

  private _insertData(dataVariable: string, data: any): void {
    this[dataVariable] = data

    this.dataLoading = false;
    this.dataError = false;
  }

  private _initForm(): void {
    this.formUserCreate = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      middleName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.pattern(/^\d{9}$/), Validators.required]],
      course: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      faculty: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    })
  }
}
