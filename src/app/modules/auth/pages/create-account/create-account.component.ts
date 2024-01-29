// * Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Services
import { LocalStorageService } from '../../../../core/services/localstorage.service';
import { TranslateService } from '../../../../core/services/translate.service';
// * Pipes
import { TranslatePipe } from '@shared/pipes/translate.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/forms.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TranslatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export default class CreateAccountComponent {
  inputType:string = 'password';
  loginSubmitted:boolean = false;
  
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
    public localService : LocalStorageService,
    private fb          : FormBuilder,
    public formService  : FormService
  ) {}

  public createForm:FormGroup = this.fb.group({
    email             : ['',[Validators.required, Validators.pattern(this.formService.emailPattern)]],
    password          : ['',[Validators.required, Validators.pattern(this.formService.passwordPattern)]],
    confirm_password  : ['',[Validators.required, ]],
  },{
    validators: [
      this.formService.equalFields('password','confirm_password')
    ]
  });

  submitCreate() {
    this.loginSubmitted = true;
    if(this.createForm.valid) {
      this.createForm.reset();
      console.log('Valid form');
    } else {
      console.log('Invalid form');
    }
  }

}
