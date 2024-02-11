// * Angular
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// * Service
import { LocalStorageService } from '../../core/services/localstorage.service';
// * Components
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { LangComponent } from '@shared/components/lang/lang.component';
import { ModeComponent } from '@shared/components/mode/mode.component';
import { ThemeButtonComponent } from '@shared/components/theme-button/theme-button.component';
import { TranslateButtonComponent } from '@shared/components/translate-button/translate-button.component';
import { VersionComponent } from '@shared/components/version/version.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ 
    BreadcrumbComponent,
    LangComponent,
    ModeComponent,
    RouterModule, 
    VersionComponent,
    TranslateButtonComponent,
    ThemeButtonComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export default class AuthComponent {

  public localService = inject( LocalStorageService );

  
}
