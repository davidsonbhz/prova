import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiResponse, emptyResponse } from '../model/ApiResponse';
import { BlogUser, User, UserRegisterRequest } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) {
  }

  async registerNewUser(request: UserRegisterRequest): Promise<ApiResponse<User>> {
    try {
      const res = await this.http
        .post<ApiResponse<User>>(`${environment.apiUrl}/api/public/register`, request).toPromise();

      console.log(res);  
      return res || emptyResponse;
    } catch (error) {
      return emptyResponse;
    }
  }

  async getUsersList(): Promise<BlogUser[]> {
    try {
      const res = await this.http
        .get<ApiResponse<BlogUser[]>>(`${environment.apiUrl}/api/private/usuarios/list`).toPromise();

      return res?.data || [];
    } catch (error) {
      return [];
    }
  }

}
