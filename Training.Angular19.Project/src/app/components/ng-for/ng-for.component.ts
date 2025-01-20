import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList:string[] = ["Pune", "Chennai", "Mumbai", "Tirunelveli"];

  employeeArray : any = [
    {empId:1,name:'Faisal',city :'Hyderabad',contactNo:'9999999999'},
    {empId:2,name:'Karthik',city :'Bengalure',contactNo:'8888888888'},
    {empId:3,name:'Sambath',city :'Chennai',contactNo:'7777777777'},
    {empId:4,name:'Mano',city :'Pune',contactNo:'6666666666'},
    {empId:5,name:'Rajesh',city :'Mumbau',contactNo:'5555555555'}
  ]
}
