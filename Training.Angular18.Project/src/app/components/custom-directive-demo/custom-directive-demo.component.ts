import { Component } from '@angular/core';
import { HighlightDirectiveDirective } from '../highlight-directive.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-directive-demo',
  standalone: true,
  imports: [HighlightDirectiveDirective, FormsModule],
  templateUrl: './custom-directive-demo.component.html',
  styleUrl: './custom-directive-demo.component.css'
})
export class CustomDirectiveDemoComponent {
colorInput:string='';
}
