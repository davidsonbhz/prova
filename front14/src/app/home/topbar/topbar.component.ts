import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
  providers: [MessageService]
})
export class TopbarComponent implements OnInit {
  
  


  constructor( ) {

  }

  ngOnInit(): void {
    
    
  }

}
