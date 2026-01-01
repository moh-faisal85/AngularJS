import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {
  title = "Welcome to Angular-18 - Designation Component - Title: Training.Angular18.Project";
  fruits = ['Apple', 'Banana','Grapes','Papaya'];
  showMe: boolean = true;
}

