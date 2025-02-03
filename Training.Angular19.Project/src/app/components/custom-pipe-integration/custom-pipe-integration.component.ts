import { Component } from '@angular/core';
import { CustomPipePipe } from '../../pipes/custom-pipe.pipe';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-custom-pipe-integration',
  imports: [NgFor, CustomPipePipe, CurrencyPipe],
  templateUrl: './custom-pipe-integration.component.html',
  styleUrl: './custom-pipe-integration.component.css'
})
export class CustomPipeIntegrationComponent {
  employeeArray : any = [
    {empId:1,name:'',city :'Hyderabad',contactNo:'9999999999',salary:1500},
    {empId:2,name:'Karthik',city :'Bengalure',contactNo:'8888888888',salary:1000},
    {empId:3,name:'Sambath',city :'Chennai',contactNo:'7777777777',salary:2000},
    {empId:4,name:'Mano',city :'Pune',contactNo:'6666666666',salary:5000},
    {empId:5,name:null,city :'Mumbau',contactNo:'5555555555',salary:10000}
  ]
}
