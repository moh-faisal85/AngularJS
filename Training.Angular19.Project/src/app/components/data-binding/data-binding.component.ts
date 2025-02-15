import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router, RouterLink } from '@angular/router';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, ProgressBarComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
firstName: string = "Faisal";
rollNumber:number =123;
isActive:boolean = true;
currentDate:Date = new Date();
myPlaceholder:string = "Enter the Full Name";
div1ClassName:string = "bg-primary";
selectedCity:string  = "selectedCity";

constructor(private router:Router) {
  console.log(this.firstName); 
  console.log(this.rollNumber); 
  console.log(this.isActive); 
  console.log(this.currentDate); 
}

showWelcomeMessage()
{
  alert("Welcome to Angular 19 Tutorial")
}
OnCityChanges(event: Event)
{
  const selectedCity = (event.target as HTMLSelectElement).value; // Get the selected value
  alert('Selected City: '+ selectedCity);
  console.log(event);
}

OnCityChange()
{
  alert("Selected City - Two Way Binding : "+this.selectedCity)
}
navigateToAdmin()
{
  this.router.navigateByUrl("/admin");
}
}