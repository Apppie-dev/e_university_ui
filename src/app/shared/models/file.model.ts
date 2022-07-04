export class FileModel {

  size: string;
  name: string;
  extension: string;
  content: string;

  // Meta Info :: Front Only

  visibilityState?: boolean;
  visibilityMenu?: boolean;
  metaInactive?: boolean;
  constructor(init?: any) {
    Object.assign(this, init);
  }
}
