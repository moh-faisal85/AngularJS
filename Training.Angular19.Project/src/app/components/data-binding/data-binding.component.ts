import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
firstName: string = "Faisal";
rollNumber:number =123;
isActive:boolean = true;
currentDate:Date = new Date();

constructor() {
  console.log(this.firstName); 
  console.log(this.rollNumber); 
  console.log(this.isActive); 
  console.log(this.currentDate); 
}

}