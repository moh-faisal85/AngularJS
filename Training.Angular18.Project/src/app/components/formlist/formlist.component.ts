import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-formlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formlist.component.html'
  //,styleUrl: './formlist.component.css'
})
export class FormlistComponent implements OnInit {
  //@Input() carNamesFromLostComp:string[] = [];//['Ford','Ferrari'];
  carNamesFromLostComp: string[] = [];
 
  constructor(private carService: CarService) {

  }
  ngOnInit(): void {
    this.carService.carNames$.subscribe((updatedNames) => {
      this.carNamesFromLostComp = updatedNames;
    });
  }

}
