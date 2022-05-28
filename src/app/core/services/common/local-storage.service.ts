import { Injectable } from '@angular/core';
import { SETTINGS_APP } from '@app/constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage: Storage = window.localStorage;

  constructor(
  ) {
  }

}
