import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlogUser, User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnChanges {
  
  @Input() usuarioSelecionado?: BlogUser;

  public postagens: Post[] = [];
  public mostrarJanelaNovaPostagem = false;
  public texto = '';
  public titulo = 'escreva um titulo aqui';

  constructor(private authService: AuthService, private service: PostsService) {}
  

  async ngOnInit() {
    this.usuarioSelecionado = this.authService.getCurrentUser();
    this.postagens = await this.service.obterPostagens(this.usuarioSelecionado);
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['usuarioSelecionado']) {
      const novoValor = changes['usuarioSelecionado'].currentValue;
      const valorAntigo = changes['usuarioSelecionado'].previousValue;

      console.log(`Valor antigo: ${valorAntigo}, Novo valor: ${novoValor}`);

      this.postagens = await this.service.obterPostagens(this.usuarioSelecionado as BlogUser);
      
    }
  }

  abrirJanelaNovaPostagem() {
    this.mostrarJanelaNovaPostagem = true;
  }

  salvarPostagem() {
    
  }
}
