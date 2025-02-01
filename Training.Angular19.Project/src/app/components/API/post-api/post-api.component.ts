import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList: any[] = [];
  carObj: any =
    {
      "carId": 0,
      "brand": "",
      "model": "",
      "year": "",
      "color": "",
      "dailyRate": "",
      "carImage": "",
      "regNo": ""
    };

  httpclient = inject(HttpClient);
  

  getAllCars()
  {
    this.httpclient.get("api/CarRentalApp/GetCars").subscribe((res:any) =>
      {
        this.carList = res.data;
        //debugger;
      })
  }

  onSaveCar(){
    this.httpclient.post("api/CarRentalApp/CreateNewCar", this.carObj).subscribe((response:any)=>{
      if(response.result)
      {
        alert("New Car Details Saved Successfully");
        this.getAllCars();
      }
      else
      {
        alert("Error: " + response.message);
      }
    })

  }
}
