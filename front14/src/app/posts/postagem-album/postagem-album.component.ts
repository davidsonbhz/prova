import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postagem-album',
  templateUrl: './postagem-album.component.html',
  styleUrl: './postagem-album.component.css'
})
export class PostagemAlbumComponent {
  @Input() texto = '';
  images: any[] = [];
  responsiveOptions: any[] | undefined;


}
