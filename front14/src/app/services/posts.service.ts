import { Injectable } from '@angular/core';
import { BlogUser } from '../model/User';
import { Post, PostInsertRequest } from '../model/Post';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ApiResponse } from '../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  
  constructor(private http: HttpClient) { }


  async obterPostagens(usuarioSelecionado?: BlogUser): Promise<Post[]> {
    
    try {
      const res = await this.http
        .get<ApiResponse<Post[]>>(`${environment.apiUrl}/api/private/postagens/list`).toPromise();

      return res?.data || [];
    } catch (error) {
      return [];
    }

  }


  async salvarPostagem(record: PostInsertRequest) {
    console.log(record);
    await this.http.post(`${environment.apiUrl}/api/private/postagens`, record).toPromise();
  }

  async excluirPostagem(post: Post) {
    await this.http.delete(`${environment.apiUrl}/api/private/postagens/${post.id}`).toPromise();
  }
  
}
