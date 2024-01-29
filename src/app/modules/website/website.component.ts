import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChangeLangComponent } from '@shared/components/change-lang/change-lang.component';
import { ChangeModeComponent } from '@shared/components/change-mode/change-mode.component';
import { VersionComponent } from '@shared/components/version/version.component';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    RouterModule,
    ChangeModeComponent,
    ChangeLangComponent,
    VersionComponent
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export default class WebsiteComponent {

}
