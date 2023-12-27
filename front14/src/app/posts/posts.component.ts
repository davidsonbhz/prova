import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlogUser, User } from '../model/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnChanges {
  
  @Input() usuarioSelecionado?: BlogUser;

  constructor(private authService: AuthService) {}
  

  ngOnInit(): void {
    this.usuarioSelecionado = this.authService.getCurrentUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuarioSelecionado']) {
      const novoValor = changes['usuarioSelecionado'].currentValue;
      const valorAntigo = changes['usuarioSelecionado'].previousValue;

      console.log(`Valor antigo: ${valorAntigo}, Novo valor: ${novoValor}`);

      // Faça o que precisa ser feito quando o Input sofrer alteração
    }
  }
}
