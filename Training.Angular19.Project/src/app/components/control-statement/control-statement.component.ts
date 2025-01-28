import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
div1Visible:boolean = false;
isChecked:boolean = false;
dayName:string='';
cityList:string []= [
  "Pune",
  "Chennai",
  "Mumbai",
  "Bengalure"
];

employeeArray : any = [
  {empId:1,name:'Faisal',city :'Hyderabad',contactNo:'9999999999'},
  {empId:2,name:'Karthik',city :'Bengalure',contactNo:'8888888888'},
  {empId:3,name:'Sambath',city :'Chennai',contactNo:'7777777777'},
  {empId:4,name:'Mano',city :'Pune',contactNo:'6666666666'},
  {empId:5,name:'Rajesh',city :'Mumbau',contactNo:'5555555555'}
]

hideShowDiv1(isShow:boolean)
{
this.div1Visible=isShow;
}
}
