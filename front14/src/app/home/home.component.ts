import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private authservice: AuthService) {

  }
  
  ngOnInit(): void {
    this.authservice.checkLoginStatus();
  }

}