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

  user = signal({id:111, name:"Faisal"});
  email = linkedSignal({
    source: this.user,
    computation:user => `${user.name + user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id //Based on this condition true only then perform computation
  })

  changeId()
  {
    //alert("ChangeId");
    this.user.set({id:123, name:"Sul"});
  }
}
