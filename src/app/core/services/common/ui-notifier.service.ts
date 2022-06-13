import { Injectable, TemplateRef } from '@angular/core';
import { NotifierMessageModel } from '@app/models';
import { Subject } from 'rxjs';
import { UtilsService } from './utils.services';
import { SETTINGS_NOTIFICATION } from '@app/constants';


@Injectable({
  providedIn: 'root'
})
export class UiNotifierService {

  message$ = new Subject<NotifierMessageModel>();
  messageHideAll$ = new Subject();
  messageHideId$ = new Subject<string>();

  show(type: string, text: string, template?: TemplateRef<any> | undefined): void {
    this.message$.next(new NotifierMessageModel({ type, text, template }));
  }

  showWithDelay(type: string, text: string, delay: number = 1000, template?: TemplateRef<any> | undefined): void {
    setTimeout(() => this.show(type, text, template), delay);
  }

  hideAll(): void {
    // this.messageHideAll$.next();
  }

  close(messageId: string): void {
    this.messageHideId$.next(messageId);
  }

  showInfo(text: string, template?: TemplateRef<any> | undefined): void {
    this.show('info', text, template);
  }
  showSuccess(text: string, template?: TemplateRef<any> | undefined): void {
    this.show('success', text, template);
  }
  showError(text: string, template?: TemplateRef<any> | undefined): void {
    this.show('error', text, template);
  }
}
