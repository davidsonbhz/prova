import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.css',
  providers: [MessageService]

})
export class UserinfoComponent implements OnInit {
  public nome: string = '';
  items: MenuItem[] = [];


  constructor(private authservice: AuthService, private messageService: MessageService) {}
  
  ngOnInit(): void {
    this.nome = this.authservice.getCurrentUserName();

    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => {
              this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          icon: 'pi pi-refresh',
          command: () => {
              this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          icon: 'pi pi-trash',
          command: () => {
              this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      },
      {
          icon: 'pi pi-upload',
          routerLink: ['/fileupload']
      },
      {
          icon: 'pi pi-external-link',
          target: '_blank',
          url: 'http://angular.io'
      }
  ];
  }

  sair() {
    this.authservice.encerrarSessao();
  }
}
