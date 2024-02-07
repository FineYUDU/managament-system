// * Angular
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// * Service
import { FormService } from '@core/services/forms.service';
import { LocalStorageService } from '@core/services/localstorage.service';
import { TranslateService } from '../../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// * Components
import { InputFieldComponent } from '@shared/components/input-field/input-field.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputFieldComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  token:string = '';
  inputType:string = 'password';
  loginSubmitted:boolean = false;
  // * Password invalid
  passUserInvalid:boolean = false;
  // * Loading
  isLoading:boolean = false;
  // * Inject Services
  public fb = inject( FormBuilder );
  public ts = inject( TranslateService );
  public router = inject( Router );
  public localService = inject( LocalStorageService );
  public formService = inject( FormService );

  
  // * Change Input Type
  changeType():string {
    if(this.inputType === 'text') {
    return this.inputType = 'password';
    } else {
    return this.inputType = 'text';
    }
  }

  public loginForm:FormGroup = this.fb.group({
    user                : [ localStorage.getItem('email') || '',[ Validators.required, Validators.pattern(this.formService.emailPattern)]],
    password            : [ '',[ Validators.required ]],
    remember            : [ false ]
  });

  // ? Loader Methods
  showLoader() {
    this.isLoading = true;
  }
  hideLoader() {
    this.isLoading = false;
  }
  
  submitUser() {
    // * 1- Show Loader
    this.showLoader();

    // * 2 -SetTimeOut
    setTimeout(()=> {
      // * 3- Activate Submit
      this.loginSubmitted = true;
      // * 4- Validated
      if(this.loginForm.valid) {
        // * 5- Show Loader
        this.showLoader();
        // * Remember email
        if(this.loginForm.controls['remember'].value) {
          localStorage.setItem('token',this.token)
          localStorage.setItem('remember',this.loginForm.get('remember')?.value)
        } else {
          localStorage.removeItem('email')
          localStorage.removeItem('remember')
        }
  
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
      // * 6 Hide Loader
      this.hideLoader();
    },
    1000);

  }


}
