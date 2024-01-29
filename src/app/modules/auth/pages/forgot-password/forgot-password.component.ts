// * Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// * Pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// * Services
import { FormService } from '../../../../core/services/forms.service';
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { TranslateService } from '../../../../core/services/translate.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export default class ForgotPasswordComponent {
  forgotSubmitted:boolean = false;

  constructor(
    public ts           : TranslateService,
    private fb          : FormBuilder,
    private router      : Router,
    public formService  : FormService,
    public localService : LocalStorageService
  ) {}
  
  public forgotForm:FormGroup = this.fb.group({
    email : [,[ Validators.required, Validators.pattern(this.formService.emailPattern) ]]
  })

  submiforgot() {
    this.forgotSubmitted = true;
    if(this.forgotForm.valid) {
      if(this.forgotForm.controls['email'].value == 'test@test.com') {
        this.forgotSubmitted = false;
        this.forgotForm.reset();
      } 
      else {
        // * In case want error from backend
        // this.passUserInvalid = true;
        console.log('Email no existe');  
      }
    }
    else {
      console.log('Form invalid');
    }

  }


}
