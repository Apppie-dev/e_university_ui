import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  static generateId(): string {
    // return ((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return ((1 + Math.random())).toString(16).substring(2);
  }

  static generateRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static getErrorsArray(errors: any): string[] {
    return Object.keys(errors).map((errorKey: string) => errors[errorKey]);
  }
}
