import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-temp-ng-container',
  imports: [NgIf,NgFor],
  templateUrl: './ng-temp-ng-container.component.html',
  styleUrl: './ng-temp-ng-container.component.css'
})
export class NgTempNgContainerComponent {
  
  isLoader:boolean = true;
  constructor()
  {
    setTimeout(() => {
      this.isLoader  = false;
    }, 3000); 
  }
  employeeArray : any = [
    {empId:1,isActive:false, name:'Faisal',city :'Hyderabad',contactNo:'9999999999',salary:1500, attendance:100},
    {empId:2,isActive:true, name:'Karthik',city :'Bengalure',contactNo:'8888888888',salary:1000, attendance:50},
    {empId:3,isActive:false, name:'Sambath',city :'Chennai',contactNo:'7777777777',salary:2000, attendance:80},
    {empId:4,isActive:true, name:'Mano',city :'Pune',contactNo:'6666666666',salary:5000, attendance:30},
    {empId:5,isActive:false, name:'Rajesh',city :'Mumbau',contactNo:'5555555555',salary:10000, attendance:40}
  ]
}
