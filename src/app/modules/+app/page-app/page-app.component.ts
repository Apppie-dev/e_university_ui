import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageMetaService } from '@app/services';
import { PageMetaModel } from '@app/shared/models/page-meta.model';
import {Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'page-app',
  templateUrl: './page-app.component.html',
  styleUrls: ['./page-app.component.scss']
})
export class PageAppComponent implements OnInit {

  private pageMeta: PageMetaModel;
  private unsubscribePage$ = new Subject();

  constructor(
    private title: Title,
    private pageMetaService: PageMetaService,
  ) {
  }

  ngOnInit(): void {
    this.pageMetaService.dataSubject$
      .pipe(takeUntil(this.unsubscribePage$))
      .subscribe((pageMeta: PageMetaModel) => {
        this.pageMeta = pageMeta;
        this.title.setTitle(this.pageMeta.title);
      });
  }
}
