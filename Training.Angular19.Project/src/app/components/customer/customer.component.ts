import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerObj : any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }
//Create default Customer List object
  customerList: any[] = [];

  constructor(private httpClient:HttpClient) 
  {
    this.getCustomers();
  }
  
  //All customer from API
  getCustomers()
  {
    this.httpClient.get("api/CarRentalApp/GetCustomers").subscribe((response: any) => 
      {
    this.customerList = response.data;
    debugger;
    })
  }
}
