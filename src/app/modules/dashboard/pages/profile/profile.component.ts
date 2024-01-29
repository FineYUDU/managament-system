// * Angular
import { Component } from '@angular/core';
import { LocalStorageService } from '../../../../core/services/localstorage.service';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

  constructor(
    public localService : LocalStorageService
  ){}

  url:string ='../../../../../assets/profile.jpg'

  onSelectFile(e:any) {
    if(e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
