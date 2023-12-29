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
  public tipopostagem = 'texto';
  public texto = '';
  public titulo = '';
  public isSaving = false;
  

  constructor(private authService: AuthService, private service: PostsService) {}
  

  async ngOnInit() {
    this.usuarioSelecionado = this.authService.getCurrentUser();
    this.obterPostagens();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['usuarioSelecionado']) {
      this.obterPostagens();
    }
  }

  abrirJanelaNovaPostagem() {
    this.mostrarJanelaNovaPostagem = true;
    this.tipopostagem = 'texto'
  }

  abrirJanelaNovoAlbum() {
    this.mostrarJanelaNovaPostagem = true;
    this.tipopostagem = 'album'
  }

  async salvarPostagem() {
    this.isSaving = true;
    await this.service.salvarPostagem({texto: this.texto, titulo: this.titulo, tipo: this.tipopostagem});
    this.isSaving = false;
    this.mostrarJanelaNovaPostagem = false;
    this.texto = '';
    this.titulo = '';
    this.obterPostagens();
  }

  async obterPostagens() {
    this.postagens = await this.service.obterPostagens(this.usuarioSelecionado as BlogUser);
  }

  isText() {
    return this.tipopostagem == 'texto';
  }

  isAlbum() {
    return this.tipopostagem == 'album';
  }

  onTextChange(text: string) {
    this.texto = text;
  }
}
