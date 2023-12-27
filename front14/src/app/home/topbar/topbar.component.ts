import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  
  public nome: string = '';

  constructor(private authservice: AuthService) {

  }

  ngOnInit(): void {
    this.nome = this.authservice.getCurrentUserName();
  }

}
