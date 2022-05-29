export class PageMetaModel {

  title: string;
  shortcut: string;

  constructor(init?: any) {
    Object.assign(this, init);
  }
}
