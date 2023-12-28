import { Injectable } from '@angular/core';
import { BlogUser } from '../model/User';
import { Post } from '../model/Post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: HttpClient) { }


  async obterPostagens(usuarioSelecionado: BlogUser): Promise<Post[]> {
    
    try {
      const res = await this.http
        .get<ApiResponse<Post[]>>(`${environment.apiUrl}/api/public/postagens/list`).toPromise();

      return res?.data || [];
    } catch (error) {
      return [];
    }

  }


}
