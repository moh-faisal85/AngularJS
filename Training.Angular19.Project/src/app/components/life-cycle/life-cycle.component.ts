import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,DoCheck,OnChanges
{
  constructor() {
    console.log("Constructor Event Called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Event Called");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck Event Called");
  }

  ngOnInit(): void {
    console.log("ngOnInit Event Called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Event Called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Event Called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Event Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Event Called");
  }
  ngOnDestroy(): void {
    const isConfirmed = confirm("Do you want to navigate from page?");
    console.log("ngAfterViewChecked Event Called" + isConfirmed);

    if(isConfirmed)
    {
      //this.router.navigate(['/another-page']);
    }
    
    
  }
  
}
