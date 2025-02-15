import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from "../../../reusable/tabs/tabs.component";
import { Car, ICarList } from '../../../model/car';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    //Track the performance of View chiled, Third Party Library
    console.log("ngAfterViewInit",performance.now())
  }
  
  ngOnInit(): void {
    this.getAllCars();
  }

  currentTab:string = "NewCar";
  //Create default Car List object
  carList: ICarList[] = [];
//View Child to read control values
  @ViewChild('txtCity') cityTextBox : ElementRef | undefined;

  //Access third party component values
  @ViewChild(TabsComponent) myTabViewChild : TabsComponent | undefined;

  //Create default car object
  carObj: Car = new Car();
  //Inject HttpClient without constructor
  httpclient = inject(HttpClient);

  //Get Car Object using API
  getAllCars() {
    this.httpclient.get("api/CarRentalApp/GetCars").subscribe((res: any) => {
      this.carList = res.data;
      //debugger;
    })
  }

  //Create a new Car Object using API
  onSaveCar() {
    this.httpclient.post("api/CarRentalApp/CreateNewCar", this.carObj).subscribe((response: any) => {
      if (response.result) {
        alert("New Car Details Saved Successfully");
        this.getAllCars();
        this.carObj = new Car();
      }
      else {
        alert("Error: " + response.message);
      }
    })

  }

  //On Edit Button click show the respective Car Object details in UI
  onEdit(data: any) {
    this.carObj = data;
  }

  //Update Car Object using API
  onUpdateCar() {
    this.httpclient.put("api/CarRentalApp/UpdateCar", this.carObj).subscribe((response: any) => {
      if (response.result) {
        alert("Car Details Updated Successfully");
        this.getAllCars();
      }
      else {
        alert("Error: " + response.message);
      }
    })
  }

  //Delete Car Object using API
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete ?");
    if (isDelete) {
      this.httpclient.delete("api/CarRentalApp/DeleteCarbyCarId?carid=" + id).subscribe((response: any) => {
        if (response.result) {
          alert("Car Details Deleted Successfully");
          this.getAllCars();
        }
        else {
          alert("Error: " + response.message);
        }
      })
    }
  }

  clearForm(){
    
  }

  onTabChange(tabName:string)
  {
    debugger;
    this.currentTab = tabName;
  }

  readCity()
  {
    //debugger;
    const city  = this.cityTextBox?.nativeElement.value;
    if(this.cityTextBox)
    {
      this.cityTextBox.nativeElement.style.color="red";
    }
    const val = this.myTabViewChild?.currentTab;
    debugger;
  }
}
