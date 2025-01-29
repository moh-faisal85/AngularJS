import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent 
{
  
  firstName = signal("Mohamed ")
  lastName = signal("Faisal")

  fullName = linkedSignal({
    source: this.lastName,
    computation: (newOptions, previous)=> {
      const fullName = newOptions + " " + this.lastName()
      console.log("Old Value:"+previous?.source)
      console.log("New Value:"+ newOptions.toString())
      return fullName;
    }
  })

  changeName()
  {
    this.lastName.set("Arif");
  }
}
