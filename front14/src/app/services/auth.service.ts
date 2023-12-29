import { Injectable } from '@angular/core';
import { isLoggedIn } from '../util/userstatus';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BlogUser, User } from '../model/User';

import { ApiResponse, emptyResponse, errorResponse } from '../model/ApiResponse';
import { Constants } from '../strings';

export const getCurrentToken = () => {
  const user = JSON.parse(sessionStorage.getItem(Constants.LOGIN_DATA) as string);
  return user.token;
}

@Injectable({
  providedIn: 'root',  
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) {
  }

  checkLoginStatus() {
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

    if(res?.success) {
      this.saveSessionDataToken(res.data as User);
      this.router.navigate(['home']);
    }
    return res as ApiResponse<User>;
    
    
    } catch(e) {
      return errorResponse('LOGIN_ERROR');
    }
    
  }

  saveSessionDataToken(logindata: User) {
    sessionStorage.setItem(Constants.LOGIN_DATA, JSON.stringify(logindata));
  }


  getCurrentUserName() {
    const user = JSON.parse(sessionStorage.getItem(Constants.LOGIN_DATA) as string);
    return user?.nome;
  }
  
  getCurrentUser(): BlogUser {
    const user = JSON.parse(sessionStorage.getItem(Constants.LOGIN_DATA) as string);
    return user;
  }

  encerrarSessao() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  
}
