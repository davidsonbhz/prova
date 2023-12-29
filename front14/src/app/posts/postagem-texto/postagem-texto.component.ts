import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogUser } from '../../model/User';

@Component({
  selector: 'app-postagem-texto',
  templateUrl: './postagem-texto.component.html',
  styleUrl: './postagem-texto.component.css'
})
export class PostagemTextoComponent {

  @Output() onTextChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() texto = '';

  onChange(event: any) {
    this.onTextChange.emit(event.htmlValue);
  }
}
