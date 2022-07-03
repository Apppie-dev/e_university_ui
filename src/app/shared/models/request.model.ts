export class RequestModel {
  university_id: number;
  user_id: number;
  user_request_id: number;

  service_name: string;
  status_name: RequestStatusModel;

  date_created: string;

  // Meta Info :: Front Only

  visibilityState?: boolean;
  visibilityMenu?: boolean;
  metaInactive?: boolean;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}

export enum RequestStatusModel {
  'Approved'= 'Схвалено',
  'Rejected'= 'Відхилено',
  'UnderConsideration'= 'Розглядається',
}
