// * Angular
import { Component, inject } from '@angular/core';
import { TranslateService } from '@core/services/translate.service';
import { TranslatePipe } from '@shared/pipes/translate.pipe';
// * Services

@Component({
  selector: 'translate-button',
  standalone: true,
  imports: [
    TranslatePipe,
  ],
  templateUrl: './translate-button.component.html',
  styleUrl: './translate-button.component.css'
})
export class TranslateButtonComponent {
  // * Dependency Injection
  public ts = inject( TranslateService );
  // * Get Lang From localStorage
  get GetLang() {
    return localStorage.getItem('lang') || '';
  } 

  // ? Change Lang
  ChangeLang(lang:string){
    if(lang === 'es') {
      console.log('es');
      localStorage.setItem('lang',lang)
    } else {
      console.log('en');
      localStorage.setItem('lang','en')
    }
  }

}
