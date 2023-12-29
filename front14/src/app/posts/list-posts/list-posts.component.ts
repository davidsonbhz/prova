import { Component, Input } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/Post';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { AlbumImage } from '../../model/Album';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css',
  providers: [MessageService, ConfirmationService]
})
export class ListPostsComponent {

  @Input() public posts: Post[] = [];

  constructor(private service: PostsService,
    private confirmationService: ConfirmationService) {}

  onClickExcluir(post: Post) {
    this.confirmationService.confirm({
      message: 'Deseja excluir a postagem?',
      header: 'Aviso',
      accept: () => this.confirmaExclusao(post)
    });
  }

  onClickComentar(post: Post) {

  }

  async confirmaExclusao(post: Post) {
    await this.service.excluirPostagem(post);
    this.posts = await this.service.obterPostagens();
  }

  transformTextImages(post: Post): AlbumImage[] {
    const list = post.texto.split(';');
    const ls = list.map((x) => { return {
      itemImageSrc: x,
      thumbnailImageSrc: '',
      alt: '',       
      title: 'string'
      };
    });

    console.log(ls);
    return ls;
  }

}
