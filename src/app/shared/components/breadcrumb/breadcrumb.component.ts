// * Angular
import { ActivationEnd, Router } from '@angular/router';
import { Component, Input, inject } from '@angular/core';
// * Services
import { TranslateService } from '../../../core/services/translate.service';
// * Rxjs
import { filter, map } from 'rxjs';
import { TranslatePipe } from '@shared/pipes/translate.pipe';

@Component({
  selector: 'breadcrumb',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  // * Inject Services
  private router = inject( Router );
  public ts = inject( TranslateService );
  // * Title
  public title: any;
  @Input() DelayDefer:boolean = false;

  constructor() {
    this.getRouteData();
  }

  getRouteData() {
    this.router.events
    .pipe(
      filter( (event:any) => event instanceof ActivationEnd ),
      filter( (event:ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event:ActivationEnd) => event.snapshot.data['translate'] ),
    )
    .subscribe( data=>{
      this.title = data;
      // console.log(this.title);
    });
  }
}