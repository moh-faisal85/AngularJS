import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, NgFor, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from '../../pipes/custom-pipe.pipe';
import { ProgressBarComponent } from "../../reusable/progress-bar/progress-bar.component";

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, CurrencyPipe, TitleCasePipe, ProgressBarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName : string = "Angular 19 Course";
  cityList:string[] = ["Pune", "Chennai", "Mumbai", "Tirunelveli"];
  currentDate : Date = new Date();
  employeeArray : any = [
    {empId:1,name:'Faisal',city :'Hyderabad',contactNo:'9999999999',salary:1500, attendance:100},
    {empId:2,name:'Karthik',city :'Bengalure',contactNo:'8888888888',salary:1000, attendance:50},
    {empId:3,name:'Sambath',city :'Chennai',contactNo:'7777777777',salary:2000, attendance:80},
    {empId:4,name:'Mano',city :'Pune',contactNo:'6666666666',salary:5000, attendance:30},
    {empId:5,name:'Rajesh',city :'Mumbau',contactNo:'5555555555',salary:10000, attendance:40}
  ]
}
