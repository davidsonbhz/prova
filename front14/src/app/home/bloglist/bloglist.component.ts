import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BlogUser } from '../../model/User';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrl: './bloglist.component.css'
})
export class BloglistComponent implements OnInit {

  @Output() onUsuarioSelecionado: EventEmitter<BlogUser> = new EventEmitter<BlogUser>();


  public userlist: BlogUser[] = [];

  constructor(private userservice: UserService) {
  }

  async ngOnInit() {
    var res = await this.userservice.getUsersList();
    this.userlist = res;
  }



  fecharDiv() {
    var div = document.getElementById("myDiv");
    div!.style.display = "none";
  }

  selecionaUsuario(ev: any) {
    this.onUsuarioSelecionado.emit(ev);
  }
}
