import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ErrorLoggerService {

  // private backendUrl = environment.backendUrl;

  constructor(
    // private http: HttpClient
  ) {
  }

  logError(logType: string, message: string, additional: string): void {

    console.error('Error', logType, message, additional);

    // if (!environment.production) {
    //   // local environment : not logging, but console notification
    //   console.error('Error', logType, message, additional);
    //   return;
    // }

    // const url = `${this.backendUrl}internal/sentry-log/`;
    // const data = new HttpParams({
    //   fromObject: new ErrorLogModel({
    //     log_type: logType,
    //     description: message,
    //     trace: additional
    //   })
    // });
    //
    // this.http.post<ErrorLogModel>(url, data).subscribe(
    //   () => {},
    //   () => { /* stop cycle loop in case if log endpoint return error */ });
  }

  logHttpError(error: HttpErrorResponse): void {
    const logLevel = error.status && (error.status >= 400 && error.status < 500) ? 'warning' : 'error';
    this.logError(logLevel, `Client: ${error.message}`, `Server: ${JSON.stringify(error.error)}`);
  }
}
