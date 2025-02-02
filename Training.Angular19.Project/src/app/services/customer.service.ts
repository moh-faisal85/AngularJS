import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

apiUrl:string = "api/CarRentalApp/";

  constructor(private httpClient:HttpClient) 
  {

  }

  LoadCustomers()
  {
    return this.httpClient.get(this.apiUrl + "GetCustomers");
  }

  CreateNewCustomer(CustObj:any)
  {
    return this.httpClient.post(this.apiUrl + "CreateNewCustomer", CustObj);  

  }
}
