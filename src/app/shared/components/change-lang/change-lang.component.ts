import { Component } from '@angular/core';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-lang',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './change-lang.component.html',
  styleUrl: './change-lang.component.css'
})
export class ChangeLangComponent {

  constructor( 
    public localService       : LocalStorageService,
    public translateService   : TranslateService
  ) {
    this.translateService.lang;
  }

}
