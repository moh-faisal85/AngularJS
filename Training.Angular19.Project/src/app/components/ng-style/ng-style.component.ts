import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
div1BackColor: string = '';

addDiv1StyleColor(color:string)
{
  this.div1BackColor = color;
}
}
