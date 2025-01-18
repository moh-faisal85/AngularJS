import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
div1Visiable : boolean = true;
/**
 *
 */
constructor() {
  //alert(this.div1Visiable);
  
}
hideDiv()
{
  this.div1Visiable = false;

}
showDiv()
{
  this.div1Visiable = true;
  
}
}
