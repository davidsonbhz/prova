import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlbumImage } from '../../model/Album';

@Component({
  selector: 'app-postagem-album',
  templateUrl: './postagem-album.component.html',
  styleUrl: './postagem-album.component.css'
})
export class PostagemAlbumComponent implements OnInit, OnChanges {
  
  @Input() texto = '';
  @Output() onTextChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('fileUpload') fileUpload: any;
  
  uploadUrl = '';  
  images: any[] = [];
  

  ngOnInit(): void {
    this.uploadUrl = environment.uploadUrl;
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['images']) {
      
    }
  }

  onSend(event: any) {
    this.fileUpload.files.forEach((f: any) => {
      this.images.push({
        itemImageSrc: this.ajustName(`${environment.uploadImages}/${f.name}`),
        thumbnailImageSrc: this.ajustName(`${environment.uploadImages}/thumbnail_${f.name}`),
        alt: '',
        title: ''
      })  
    });
    
    this.fileUpload.clear();
    console.log(this.images);

    const list = this.images.map(x => x.itemImageSrc).join(';');
    this.onTextChange.emit(list);

  }

  private ajustName(name: string) {
    return name;
    // return name.replace(' ', '_');
  }

}
