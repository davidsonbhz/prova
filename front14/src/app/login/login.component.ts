import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'primeng/api';
import { ErrorCode, getErrorMessage } from '../util/errorTranslation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  loading = false;
  submitted = false;
  returnUrl: string = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  async onLogin() {
    this.submitted = true;

  
    this.loading = true;
    const resp = await this.authenticationService.login(this.username, this.password);
    if(!resp.success) {
      this.messageService.add({severity:'error', summary: 'Error', detail: getErrorMessage(resp.message as ErrorCode)});
    }
    
    this.loading = false;
  }

  
}
