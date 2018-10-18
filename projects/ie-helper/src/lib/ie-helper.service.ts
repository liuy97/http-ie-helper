import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class HttpIEHelperInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    let headers = req.headers;
    headers = headers.set('Cache-Control', 'no-cache');
    headers = headers.set('Pragma', 'no-cache');
    headers = headers.set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT');
    return next.handle(req.clone({headers: headers}));
  }
}
