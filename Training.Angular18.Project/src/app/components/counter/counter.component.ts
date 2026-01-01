import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
clickCount:number = 0;
increment()
{
  this.clickCount++;
}
decrement()
{
  //Decrease if value more than zero value
  if(this.clickCount > 0)
  {
  this.clickCount--;
  }
}
}
