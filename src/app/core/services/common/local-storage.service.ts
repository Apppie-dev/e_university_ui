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

  setRecord(key: string, value: any): Error | void {
    if (!key.trim()) {
      throw new Error('Key should not be empty');
    }
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getRecord(storageKey: string): any {
    const storageItemRaw: string | null = this.localStorage.getItem(storageKey);
    let storageItem: any;

    if (storageItemRaw === null) {
      return null;
    }

    try {
      storageItem = JSON.parse(storageItemRaw);
    } catch (error) {
      return null;
    }

    return storageItem;
  }

  removeRecord(storageKey: string): void {
    this.localStorage.removeItem(storageKey);
  }

  clearStorage(clearAll = false): void {
    this.localStorage.removeItem(SETTINGS_APP.STORE_DATA_KEYS.AUTH);

    if (clearAll) {
      this.localStorage.clear();
    }
  }
}
