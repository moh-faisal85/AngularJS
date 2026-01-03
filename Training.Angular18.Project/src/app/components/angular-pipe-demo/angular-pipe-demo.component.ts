import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-pipe-demo.component.html',
  styleUrl: './angular-pipe-demo.component.css'
})
export class AngularPipeDemoComponent {
  //String Pipe
text = 'angular pipes example';
//Date Pipe
currentDate: Date = new Date();
//Number Pipe
num = 12345.6789;
bigNum = 987654321.45;
negNum = -4567.89;
//Currency
amount = 12345.678;
negAmount = -4567.89;
largeAmount = 987654321.99;

}
