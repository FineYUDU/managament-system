// * Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// * Services
import { FormService } from '../../../../core/services/forms.service';
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { TranslateService } from '../../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  inputType:string = 'password';
  loginSubmitted:boolean = false;
  passUserInvalid:boolean = false;
  
  // * Change Input Type
  changeType():string {
    if(this.inputType === 'text') {
    return this.inputType = 'password';
    } else {
    return this.inputType = 'text';
    }
  }
  constructor(
    public ts           : TranslateService,
    private fb          : FormBuilder,
    private router      : Router,
    public localService : LocalStorageService,
    public formService  : FormService
  ) {}

  public loginForm:FormGroup = this.fb.group({
    user                : [ 'test@test.com',[ Validators.required, Validators.pattern(this.formService.emailPattern)]],
    password            : [ 'password',[ Validators.required ]]
  });

  submitUser() {
    this.loginSubmitted = true;
    if(this.loginForm.valid) {
      // ! console.log('Valid form');
      if(
        this.loginForm.controls['user'].value == 'test@test.com' &&
        this.loginForm.controls['password'].value == 'password' 
      ) {
        // * Navigate to dashboard
        this.router.navigateByUrl('dashboard');
        // * Set username
        localStorage.setItem('username','test')
      } 
      else {
        this.passUserInvalid = true;
        // * console.log('Contraseña o usuario invalido');  
      }
    }
    else {
      // ! console.log('Form invalid');
    }

  }




}
