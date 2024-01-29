// * Angular
import { ApplicationRef, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TranslateService {
    lang:string;
    
    constructor( private appRef: ApplicationRef ) { 
        // * Initialize lang from localStorage or use 'es' as the default
        this.lang =  localStorage.getItem('lang') || 'es';    
        
        const lang = localStorage.getItem('lang');

        if(!lang) {
            // * Set the default lang as 'es' if it doesn't exist in localStorage
            localStorage.setItem('lang','es');
        }
    }
    // * Get Lang
    GetLang():string {
        if(localStorage.getItem('lang') === 'es') {
          return 'es'
        } 
        else {
          return 'en'
        }
    }

    // ? Change Lang
    changeLang() {
        // * Get current Lang
        const currentLang = localStorage.getItem('lang');
        // * Change lang
        let lang = currentLang === 'es' ? 'en' : 'es';
    
        // * Update lang in localStorage and service
        localStorage.setItem('lang', lang);
        this.lang = lang;
        // * New Lang
        // ! console.log('new', this.lang);
    }
    
}