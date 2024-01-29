// * Angular
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// * Services
import { ThemeService } from '../../../core/services/theme.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
  selector: 'change-mode',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './change-mode.component.html',
  styleUrl: './change-mode.component.css'
})
export class ChangeModeComponent {

  constructor( 
    public themeService : ThemeService,
    public localService : LocalStorageService 
  ) {}

}
