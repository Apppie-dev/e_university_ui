import {Component, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UiNotifierService, UtilsService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {NotifierMessageModel} from "@app/models";
import {NotifierNotificationOptions} from "angular-notifier/lib/models/notifier-notification.model";
import {SETTINGS_NOTIFICATION} from "@app/constants";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
})
export class AppRootComponent implements OnInit {
  @ViewChild('templateNotificationDefault') templateNotificationDefault!: TemplateRef<any>;

  private messageQueue: NotifierNotificationOptions[] = [];

  private unsubscribePage$ = new Subject();

  constructor(
    private notifierService: NotifierService,
    private uiNotifierService: UiNotifierService,
  ) {
  }

  @HostListener('document:visibilitychange', ['$event'])
  documentVisibilityChange(event): void {
    if (!document.hidden && this.messageQueue.length) {
      const notification = this.messageQueue.pop();
      this._notificationShow(notification);
    }
  }

  ngOnInit(): void {
    this.uiNotifierService.message$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((message: NotifierMessageModel) => {

        const notificationId = UtilsService.generateId();
        const notificationMessage: NotifierNotificationOptions = {
          id: notificationId,
          type: message.type,
          message: message.text,
          template: message.template || this.templateNotificationDefault
        };

        if (document.hidden) {
          // save only last message
          this.messageQueue = [notificationMessage];
        } else {
          this._notificationShow(notificationMessage);
        }
      });
  }

  private _notificationShow(message: NotifierNotificationOptions): void {
    this.notifierService.show(message);
    setTimeout(() => {
      this.notifierService.hide(message.id);
    }, SETTINGS_NOTIFICATION.HIDE);
  }
}
