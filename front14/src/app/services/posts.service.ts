import { Injectable } from '@angular/core';
import { BlogUser } from '../model/User';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor() { }


  async obterPostagens(usuarioSelecionado: BlogUser): Promise<Post[]> {
    
    

  }


}
