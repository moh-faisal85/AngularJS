import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
  title = "Welcome to Angular-18 - Designation Component - Title: Training.Angular18.Project";
  fruits = ['Apple', 'Banana','Grapes','Papaya'];
}

