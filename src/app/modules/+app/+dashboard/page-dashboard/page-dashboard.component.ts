import { Component, OnInit } from '@angular/core';
import { Unsubscribe } from '@app/decorators';
import { PageMetaModel } from '@app/shared/models/page-meta.model';
import { PageMetaService } from '@app/services';


@Component({
  selector: 'page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})

@Unsubscribe()
export class PageDashboardComponent implements OnInit {

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  private pageTitle = 'Main Page';

  ngOnInit(): void {

    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));
  }

}
