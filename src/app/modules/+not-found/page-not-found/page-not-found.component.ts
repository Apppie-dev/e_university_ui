import { Component, OnInit } from '@angular/core';
import { PageMetaService } from '@app/services';
import { PageMetaModel } from '@app/shared/models/page-meta.model';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

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
