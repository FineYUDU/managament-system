// * Angular
import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// * Services
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { TranslateService } from '../../../core/services/translate.service';
// * Libraries
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    TranslatePipe,
    RouterModule,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username:string = localStorage.getItem('username') || 'noName';
  chevron:boolean = false;
  constructor(
    public ts           : TranslateService,
    private el          : ElementRef,
    public localService : LocalStorageService
  ) {}

  // * Detect Click Outside container
  @HostListener('document:click',['$event'])
  handleClick(event: Event) {
    const chevron = this.el.nativeElement.querySelector('.label_checkbox');
    if(!chevron.contains(event.target)) {
      this.chevron = false
    }
  }

}
