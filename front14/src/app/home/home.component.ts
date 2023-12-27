import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BlogUser } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  public usuarioatual?: BlogUser;

  constructor(private authservice: AuthService) {

  }
  
  ngOnInit(): void {
    this.authservice.checkLoginStatus();
  }

  onUsuarioSelecionado(user: BlogUser) {
    console.log(user);
    this.usuarioatual = user;
  }
}
