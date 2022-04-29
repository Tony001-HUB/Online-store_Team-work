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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const authInfo = request.clone({
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')
      })
    })
    if (request.url.includes('firebaseio')) {
      
    } else {
      return next.handle(authInfo)
    }
    
  }
}

// : Observable<HttpEvent<unknown>> 