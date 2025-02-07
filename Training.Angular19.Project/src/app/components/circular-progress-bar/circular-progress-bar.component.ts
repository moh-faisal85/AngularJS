
import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-circular-progress-bar',
  templateUrl: './circular-progress-bar.component.html',
  styleUrls: ['./circular-progress-bar.component.css'],
  imports:[NgStyle, NgFor]
})
export class CircularProgressBarComponent {

  progressBars = [
    { label: 'Primary', value: 75, color: '#007bff' },
    { label: 'Success', value: 60, color: '#28a745' },
    { label: 'Warning', value: 40, color: '#ffc107' },
    { label: 'Danger', value: 90, color: '#dc3545' }
  ];

  getConicGradient(value: number, color: string) {
    return `conic-gradient(${color} 0% ${value * 3.6}deg, #ddd ${value * 3.6}deg 360deg)`;
  }
}
