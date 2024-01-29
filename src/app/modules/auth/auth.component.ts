// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Components
import { LocalStorageService } from '../../core/services/localstorage.service';
import { VersionComponent } from '@shared/components/version/version.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ 
    RouterModule, 
    VersionComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  constructor( public localService : LocalStorageService ) {}
  
}
