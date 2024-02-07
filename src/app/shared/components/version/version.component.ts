import { Component } from '@angular/core';

@Component({
  selector: 'version',
  standalone: true,
  imports: [],
  template: `
    <p class="font_c1 color_primary_100 font_medium">
      {{companyName}} 
      <span class="font_regular color_primary_100">
        ©2024 {{dashVersion}}
      </span>
    </p>

  `
})
export class VersionComponent {

  // TODO: Backend
  dashVersion:string = 'v.1.1';
  companyName:string = 'Yudu Squad'

}
