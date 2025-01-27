import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
div1Visible:boolean = false;
hideShowDiv1(isShow:boolean)
{
this.div1Visible=isShow;
}
}
