import { Component } from '@angular/core';
import { Unsubscribe } from '@app/decorators';

@Component({
  selector: 'page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})

@Unsubscribe()
export class PageDashboardComponent {

  constructor(
  ) { }

}
