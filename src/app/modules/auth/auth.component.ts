// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Components
import { ChangeModeComponent } from '@shared/components/change-mode/change-mode.component';
import { VersionComponent } from '@shared/components/version/version.component';
import { LocalStorageService } from '../../core/services/localstorage.service';
import { ChangeLangComponent } from '@shared/components/change-lang/change-lang.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ 
    RouterModule, 
    ChangeModeComponent,
    ChangeLangComponent,
    VersionComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  constructor( public localService : LocalStorageService ) {}
  
}
