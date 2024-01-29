// * Angular
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
/*
note: 
    instal npm install typings -g --save-dev
    npm install @types/node --save-dev
    in tsconfig.app.json add the next line in "compilerOptions"
    "compilerOptions":{
        "types": [ "node" ],
    }
  },
*/

@Pipe({
    name: 'translate',
    standalone:true
})

export class TranslatePipe implements PipeTransform {

    constructor( private ts : TranslateService ) {}

    transform( translateKey: string, lang: string ): string {
        // * Get lang
        const currentLang = lang || localStorage.getItem('lang') || 'es';

        // * Load JSON 
        const translations = require(`../../../assets/lang/${currentLang}.json`);

        // Dividir la clave de traducción en partes para navegar por el objeto JSON
        const keys = translateKey.split('.');

        
        // Recorrer las claves para obtener la traducción final
        let translation = translations;
        for (const key of keys) {
        if (translation.hasOwnProperty(key)) {
            translation = translation[key];
        } else {
            // Si la clave no existe, devolver la clave original
            translation = translateKey;
            break;
        }
        }

        return translation;
    }
}