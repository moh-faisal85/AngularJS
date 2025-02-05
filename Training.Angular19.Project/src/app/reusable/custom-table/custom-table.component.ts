import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  imports: [NgFor],
  templateUrl: './custom-table.component.html',
  styleUrl: ''
})
export class CustomTableComponent {
  @Input() headers: string[] = [];
  @Input() rowValues: any[][] = [];
}
