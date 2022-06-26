import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {AuthenticationService, PageMetaService, RolesService} from '@app/services';
import { PageMetaModel } from '@app/shared/models/page-meta.model';
import {Subject } from 'rxjs';
import {filter, takeUntil} from "rxjs/operators";
import {UserModel} from "@app/models";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {SETTINGS_APP} from "@app/constants";


@Component({
  selector: 'page-app',
  templateUrl: './page-app.component.html',
  styleUrls: ['./page-app.component.scss']
})
export class PageAppComponent implements OnInit {

  @ViewChild('mainContainer', {read: ElementRef}) mainContainer!: ElementRef;

  private dataUser: UserModel | null = null;

  private pageMeta: PageMetaModel;
  private unsubscribePage$ = new Subject();

  constructor(
    private title: Title,
    private router: Router,
    private pageMetaService: PageMetaService,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.authUserData$
      .pipe(
        takeUntil(this.unsubscribePage$),
        filter((userModel: UserModel | null) => Boolean(userModel)),
      )
      .subscribe((dataUser: UserModel) => {
        this.dataUser = dataUser;
        if (dataUser.role) {
          this.resolveCoreModuleRedirect();
        }
      });

    this.router.events
      .pipe(
        filter((routerEvent: RouterEvent) => routerEvent instanceof NavigationEnd),
        filter((routerEvent: RouterEvent) => !!routerEvent),
        takeUntil(this.unsubscribePage$)
      )
      .subscribe((routerEvent: RouterEvent) => {
        if (this.mainContainer) {
          this.mainContainer.nativeElement.scrollTo(0, 0);
        }

        if ((routerEvent as NavigationEnd).url === '/') {
          this.resolveCoreModuleRedirect();
        }
      });
  }

  private resolveCoreModuleRedirect(): void {
    const url = this.router.url;
    const userGroup = this.dataUser ? (this.dataUser.role[0] || null) : null;

    if ((url === '/' || url === '/app') && RolesService.isStudentRole(userGroup)) {
      this.router.navigate([SETTINGS_APP.URL_HOME_STUDENT]);
      return;
    }

    if ((url === '/' || url === '/app') && RolesService.isAdminRole(userGroup)) {
      this.router.navigate([SETTINGS_APP.URL_HOME_ADMIN]);
      return;
    }

    if ((url === '/' || url === '/app') && RolesService.isSuperAdminRole(userGroup)) {
      this.router.navigate([SETTINGS_APP.URL_HOME_SUPER_ADMIN]);
      return;
    }
  }
}
