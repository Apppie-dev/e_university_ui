export class HostelModel {

  university_id: number;
  hostel_id: number;
  commandant_id: number;
  number: number;

  name: string;
  city: string;
  street: string;
  build: string;
  commandant_full_name: string;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
