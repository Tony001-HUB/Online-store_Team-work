import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authInfo = request.clone({
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
      })
    })
    return next.handle(authInfo)
  }
}