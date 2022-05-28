import { TemplateRef } from '@angular/core';

export class NotifierMessageModel {

  id?: number;
  type!: 'default' | 'info' | 'success' | 'error';
  text!: string;
  template?: TemplateRef<any> | undefined;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
