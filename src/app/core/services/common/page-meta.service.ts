import { Injectable } from '@angular/core';
import { PageMetaModel } from '@app/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageMetaService {

  dataSubject$ = new BehaviorSubject(new PageMetaModel({
    title: '',
    shortcut: ''
  }));

  setData(pageData: PageMetaModel): void {
    this.dataSubject$.next(pageData);
  }

}
