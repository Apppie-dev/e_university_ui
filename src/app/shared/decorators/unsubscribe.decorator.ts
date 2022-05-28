import { EventEmitter } from '@angular/core';

export function Unsubscribe(skipProperties: string[] = []): any {
  return (constructor: any): void => {
    const originalDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function(): void {
      Object.keys(this).forEach((key: string) => {
        if (
          this[key] &&
          typeof (this[key].unsubscribe) === 'function' &&
          !this[key].unsubscribe.closed &&
          !(this[key] instanceof EventEmitter) &&
          skipProperties.indexOf(this[key]) === -1
        ) {
          this[key].next();
          this[key].complete();
        }
      });

      if (originalDestroy && typeof originalDestroy === 'function') {
        originalDestroy.apply(this, arguments);
      }
    };
  };
}
