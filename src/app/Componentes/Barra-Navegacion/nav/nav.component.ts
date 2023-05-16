import { AfterViewInit,Component, Directive , QueryList, ElementRef, ViewChild, ViewChildren,Renderer2 } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  
@ViewChildren('path') public path!:  QueryList<ElementRef>;




}

