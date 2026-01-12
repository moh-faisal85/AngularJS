import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html'
  //,styleUrl: './form.component.css'
})
export class FormComponent {
  carName: string = "";
  //Emit Event using Output decorator
  //@Output() carAdded = new EventEmitter<string>();
 
  constructor(private carService: CarService) {

  }


  onSubmit() {
    console.log(this.carName);
    //Send car name to Parent - App.Component
    //this.carAdded.emit(this.carName);

    //Sending the value using Car Service
    this.carService.addCarName(this.carName);
    this.carName = "";
  }
}
