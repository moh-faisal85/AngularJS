import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {
userList = resource(
  {
    loader:async () => 
      {
        return fetch('https://jsonplaceholder.typicode.com/users').then(
        (res)=>res.json() as Promise<any[]>)
      }
  })

  reloadData()
  {
    this.userList.reload();
  }
}
