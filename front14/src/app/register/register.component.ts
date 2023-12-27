import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
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
    private userService: UserService
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
      this.registerForm.reset();
      return;
    }

    console.log(this.registerForm.value);
    const result = await this.userService.registerNewUser(this.registerForm.value);

    if(result.success) {
      this.router.navigate(['login']);
    }

  }
}
