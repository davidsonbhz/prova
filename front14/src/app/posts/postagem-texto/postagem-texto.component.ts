import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postagem-texto',
  templateUrl: './postagem-texto.component.html',
  styleUrl: './postagem-texto.component.css'
})
export class PostagemTextoComponent {

  @Input() texto = '';

}
