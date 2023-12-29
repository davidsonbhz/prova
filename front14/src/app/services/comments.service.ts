import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, emptyResponse, emptySuccessResponse, errorResponse } from '../model/ApiResponse';
import { environment } from '../../environments/environment';
import { Comentario } from '../model/Comentario';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  

  constructor(private http: HttpClient) { }

  async getCommentsList(postId: number): Promise<Comentario[]> {
    try {
      const res = await this.http
        .get<ApiResponse<Comentario[]>>(`${environment.apiUrl}/api/private/comentarios/list/${postId}`).toPromise();

      return res?.data || [];
    } catch (error) {
      return [];
    }
  }
  
  async salvarComentario(postagemId: number, texto: string) {
    try {
      const res = await this.http
        .post<ApiResponse<string>>(`${environment.apiUrl}/api/private/comentarios`, {postagemId, texto}).toPromise();

      return res?.data || [];
    } catch (error) {
      return [];
    }
  }


  async excluirComentario(id: number) {
    await this.http.delete<ApiResponse<string>>(`${environment.apiUrl}/api/private/comentarios/${id}`).toPromise();
  }
  
}
