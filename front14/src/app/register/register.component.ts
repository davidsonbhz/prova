import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { MessageService } from 'primeng/api';
import { ErrorCode, getErrorMessage } from '../util/errorTranslation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService]
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
    });
  }

  goBackLogin() {
    this.router.navigate(['login']);
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Verifique os dados digitados'});
      // this.registerForm.reset();
      return;
    }

    const resp = await this.userService.registerNewUser(this.registerForm.value);

    if(resp.success) {
      this.messageService.add({severity:'info', summary: 'Sucesso', detail: 'Dados cadastrados com sucesso'});
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 650);

    } else {
      this.messageService.add({severity:'error', summary: 'Error', detail: getErrorMessage(resp.message as ErrorCode)});
    }

  }
}
