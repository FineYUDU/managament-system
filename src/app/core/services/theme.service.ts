import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  openCheckbox:number = 0;
  theme:string;

  constructor() { 
    // * Initialize theme from localStorage or use 'light' as the default
    this.theme = localStorage.getItem('theme') || 'light';
    // * Toggle 'dark-mode' class based on the theme
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    // * Toggle 'light-mode' class based on the theme
    document.body.classList.toggle('light-mode',this.theme === 'light');

    const theme = localStorage.getItem('theme');
  
    if(!theme) {
      // * Set the default theme as 'light' if it doesn't exist in localStorage
      localStorage.setItem('theme', 'light');
    }
  }
  // ? Change Mode
  changeMode(): void {
    // * Update the theme to the opposite of the current theme
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    // * Toggle 'dark-mode' class based on the updated theme
    document.body.classList.toggle('dark-mode', this.theme === 'dark');
    // * Toggle 'light-mode' class based on the updated theme
    document.body.classList.toggle('light-mode', this.theme === 'light');
    // * Set the theme in localStorage
    localStorage.setItem('theme', this.theme);
    // * Checkbox open and close
    this.openCheckbox = 0;
  }
}
