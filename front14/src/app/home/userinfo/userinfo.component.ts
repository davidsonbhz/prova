import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css'
})
export class UserinfoComponent {

  constructor(private authservice: AuthService) {}

  sair() {
    this.authservice.encerrarSessao();
  }
}
