import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../../strings';
import { User } from '../../model/User';
import { getCurrentToken } from '../../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('/api/private')) {
      
      const token = getCurrentToken();

      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return next.handle(authReq);
    }

    // Se não for uma rota privada, continue com a requisição original
    return next.handle(request);
  }
}