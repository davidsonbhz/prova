import { Component } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',    
})
export class AppComponent {
  title = 'Blog Solides';

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
}
