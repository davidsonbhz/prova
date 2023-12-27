import { Injectable } from '@angular/core';
import { isLoggedIn } from '../util/userstatus';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../model/User';

import { ApiResponse, emptyResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
  }

  checkLoginStatus() {
    console.log('checando status')
    if (!isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  async obterDados<T>(): Promise<ApiResponse<T>> {
    try {
      const response = await this.http.get<ApiResponse<T>>(`${environment.apiUrl}/dados`).toPromise();
      return response || emptyResponse;
    } catch (error) {
      console.error('Erro ao obter dados da API', error);
      return emptyResponse;
    }
  }


  async login(email: string, senha: string): Promise<ApiResponse<User>> {
    try {
      const res = await this.http
        .post<ApiResponse<User>>(`${environment.apiUrl}/api/public/login`, {
          email,
          senha,
        }).toPromise();

      console.log(res);  
      return res || emptyResponse;
    } catch (error) {
      return emptyResponse;
    }
  }

}
