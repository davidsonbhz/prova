import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlbumImage } from '../../model/Album';

@Component({
  selector: 'app-postagem-album',
  templateUrl: './postagem-album.component.html',
  styleUrl: './postagem-album.component.css'
})
export class PostagemAlbumComponent implements OnInit {
  
  @Input() texto = '';
  @Output() onTextChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('fileUpload') fileUpload: any;
  
  uploadUrl = '';  
  images: any[] = [];
  

  ngOnInit(): void {
    this.uploadUrl = environment.uploadUrl;
  }


  onSend(event: any) {
    setTimeout(() => {
      this.fileUpload.files.forEach((f: any) => {
        this.images.push({
          itemImageSrc: this.ajustName(`${environment.uploadImages}/${f.name}`),
          thumbnailImageSrc: this.ajustName(`${environment.uploadImages}/thumbnail_${f.name}`),
          alt: '',
          title: ''
        })  
      });
      
      this.fileUpload.clear();
  
      const list = this.images.map(x => x.itemImageSrc).join(';');
      this.onTextChange.emit(list);
    }, 650);
    

  }

  private ajustName(name: string) {
    return name;
  }

}
