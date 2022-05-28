import { ErrorHandler, Injectable, Injector, Type } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CoreErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse): void {

  }
}
