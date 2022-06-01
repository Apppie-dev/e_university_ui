import { Component, OnInit } from '@angular/core';
import { PageMetaService } from '@app/services';
import { PageMetaModel } from '@app/shared/models/page-meta.model';

@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  private pageTitle = 'Login';

  ngOnInit(): void {
    this.pageMetaService.setData(new PageMetaModel({
      title: this.pageTitle
    }));
  }
}
