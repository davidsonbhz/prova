import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BlogUser } from '../model/User';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  public usuarioatual?: BlogUser;
  public items: MenuItem[] = [
    {tooltip: 'Fazer um novo post', icon: 'pi pi-bell'}, 
    {tooltip: 'Criar um album de fotos', icon: 'pi pi-bell'}, 
    {tooltip: 'Pesquisar'},
    {
      icon: 'pi pi-cog',
      routerLink: ['/settings'],
      tooltipOptions: {
        tooltipLabel: "Settings",
        tooltipPosition: "bottom"
      }
  },
  {
      icon: 'pi pi-info-circle',
      routerLink: ['release-notes'],
      tooltipOptions: {
        tooltipLabel: "Release notes",
        tooltipPosition: "bottom"
      }
  }
  ];
  public radius = '120';

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
