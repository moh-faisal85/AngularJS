import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
carName:string = "";
@Output() carAdded = new EventEmitter<string>();
onSubmit()
{
  console.log(this.carName);
  //Send car name to Parent - App.Component
  this.carAdded.emit(this.carName);
  this.carName = "";
}
}
