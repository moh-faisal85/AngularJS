import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { TabsComponent } from "../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-customer',
  imports: [FormsModule, TabsComponent],
  templateUrl: './customer.component.html',
  styleUrl: ''
})
export class CustomerComponent {
  tabList:string[]=["Apple1","Samsang-2","Nokia-3"];
  customerObj : any = {
    "customerId": 0,
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
  }
//Create default Customer List object
  customerList: any[] = [];

  constructor(private custSvc:CustomerService) 
  {
    this.getCustomers();
  }

  //All customer from API
  // getCustomers()
  // {
  //   this.httpClient.get("api/CarRentalApp/GetCustomers").subscribe((response: any) => 
  //     {
  //   this.customerList = response.data;
  //   debugger;
  //   })
  // }
  getCustomers()
  {
    this.custSvc.LoadCustomers().subscribe((response: any) => 
        {
        this.customerList = response.data;
        debugger;
        })
  }
  
  onSaveCustomer()
  {
    this.custSvc.CreateNewCustomer(this.customerObj)
    .subscribe((response: any) => 
      {
        if(response.result)
        {
          alert("Customer created successfully");
          this.getCustomers();
        }
        else 
        {
          alert("Error:" + response.message);
          
        }
      })
  }

}
