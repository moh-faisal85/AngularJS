export class Car
{
    carId : number;
    brand : string;
    model : string;
    year : number = 0;
    color : string;
    dailyRate? :  number;
    carImage : string;
    regNo : string;
    
    constructor() {
      this.carId = 0,
      this.brand = "",
      this.model = "",
      //this.year  = 0, //initialized during declaration
      this.color = "",  
      //this.dailyRate= 0,//Optional ? included so will not get error
      this.carImage = "",
      this.regNo = ""
    }
}

export interface ICarList
{
    carId : number;
    brand : string;
    model : string;
    year : number;
    color? : string; //optional ? included
    dailyRate :  number;
    carImage : string;
    regNo : string;
}