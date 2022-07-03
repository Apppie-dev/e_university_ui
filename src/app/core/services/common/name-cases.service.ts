import { Injectable } from '@angular/core';
import {Anthroponym} from "shevchenko";
import * as nameBuilder from "shevchenko";
@Injectable({
  providedIn: 'root'
})
export class NameCasesService {

  static buildNameGenetive(fullName: string): string {
    const name = NameCasesService.prepareName(fullName);

    return `${nameBuilder.inGenitive(name).lastName} ${nameBuilder.inGenitive(name).firstName} ${nameBuilder.inGenitive(name).middleName}`;
  }

  static buildNameDative(fullName: string): string {
    const name = NameCasesService.prepareName(fullName);

    return `${nameBuilder.inDative(name).lastName} ${nameBuilder.inDative(name).firstName} ${nameBuilder.inDative(name).middleName}`;
  }

  private static prepareName(fullName: string): Anthroponym {
    const fullNameArray = fullName.split(' ');
    const fullNameObject = {
      lastName: fullNameArray[0],
      firstName: fullNameArray[1],
      middleName: fullNameArray[2],
    }

    // todo:: resolve gender detection
    return {
      gender: 'male',
      firstName: fullNameObject.firstName,
      middleName: fullNameObject.middleName,
      lastName: fullNameObject.lastName
    } as Anthroponym;

  }
}
