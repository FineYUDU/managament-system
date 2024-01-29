// * Angular
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class LocalStorageService {

    constructor() {}

    // * Get Mode
    GetMode():string | null {
        let mode = localStorage.getItem('theme');
        return mode;
    }
}