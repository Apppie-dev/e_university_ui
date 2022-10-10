export class HostelRequestModel {
  university_id: number;
  user_id: number;
  user_request_id: number;

  service_name: string;
  status: {
    status_id: RequestStatusIDModel
    status_name: string
  };

  date_created: string;

  full_name: string;
  faculty_name: string;
  short_university_name: string;
  rector_full_name: string;
  date_today: string;
  start_year: number;
  finish_year: number;
  speciality_code: number;
  speciality_name: string;
  course: number;
  educ_level: string;


  // Meta Info :: Front Only

  visibilityState?: boolean;
  visibilityMenu?: boolean;
  metaInactive?: boolean;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export enum RequestStatusIDModel {
  'Approved'= 1,
  'Rejected',
  'InProgress',
  'Canceled',
}
