import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@app/services";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {SETTINGS_APP} from "@app/constants";


@Component({
  selector: 'core-sidebar',
  templateUrl: './core-sidebar.component.html',
  styleUrls: ['./core-sidebar.component.scss']
})
export class CoreSidebarComponent implements OnInit {

  private unsubscribePage$ = new Subject();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {

  }

  actionLogout(): void {
    this.authenticationService.logout()
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe(() => {
        this.router.navigate([SETTINGS_APP.URL_LOGIN], {
          queryParams: {
            returnUrl: encodeURIComponent(this.router.routerState.snapshot.url)
          }
        });
      });
  }
}
