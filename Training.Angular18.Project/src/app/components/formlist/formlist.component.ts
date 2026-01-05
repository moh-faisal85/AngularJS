import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formlist.component.html',
  styleUrl: './formlist.component.css'
})
export class FormlistComponent {
@Input() carNamesFromLostComp:string[] = [];//['Ford','Ferrari'];

}
