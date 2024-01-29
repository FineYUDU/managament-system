import { Component } from '@angular/core';

@Component({
  selector: 'version',
  standalone: true,
  imports: [],
  templateUrl: './version.component.html',
  styleUrl: './version.component.css'
})
export class VersionComponent {

  // TODO: Backend
  dashVersion:string = 'v.1.1';
  companyName:string = 'Yudu Squad'

}
