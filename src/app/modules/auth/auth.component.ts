// * Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Components
import { LocalStorageService } from '../../core/services/localstorage.service';
import { VersionComponent } from '@shared/components/version/version.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { LangComponent } from '@shared/components/lang/lang.component';
import { ModeComponent } from '@shared/components/mode/mode.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ 
    BreadcrumbComponent,
    LangComponent,
    ModeComponent,
    RouterModule, 
    VersionComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  constructor( public localService : LocalStorageService ) {}
  
}
