import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarComponent } from '../../reusable/progress-bar/progress-bar.component';
import { CustomTableComponent } from "../../reusable/custom-table/custom-table.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [RouterLink, ProgressBarComponent, CustomTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  constructor() {
    this.getUsers();
  }
  headerArray: string[] = ['ID', 'Name', 'Age', 'City'];
  headerArrayValues: any[][] = [
    [1, 'John Doe', 30, 'New York'],
    [2, 'Jane Doe', 25, 'Los Angeles'],
    [3, 'Sam Smith', 35, 'Chicago']
  ];
  http = inject(HttpClient);

  getUsers()
  {
    debugger;
    this.http.get("/api/UserApp/GetAllUsers").subscribe((Res:any)=>
    {
      debugger;
    })
  }
}
