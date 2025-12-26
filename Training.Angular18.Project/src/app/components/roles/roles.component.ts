import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  /*In-html template without external html file */
  // template: `
  //   <input type="text" [(ngModel)]="title" />
  //   <p>{{ title }}</p>
  styleUrl: './roles.component.css'
})



export class RolesComponent {
  title = 'Training.Angular18.Project';
  /*Variable Data Type : number, boolean, Date, object, array, null, undefined*/

  firstName: string = "Mohamed Faisal"; //Stringly Typed Variable
  lastName = "Mohamed Arif"; //Non-Strongly Type Variable
  angularVersion: number = 18;
  isActive: boolean = true;
  currentDate: Date = new Date();
  //1️⃣ Normal - Function - Approach-1
  /*
  ShowMessage(){
    alert('Message: Hello World');
  }
  ShowMessage(message:string){
    alert(message);
  }
  */


  //2️⃣ Arrow function (Lexical this)
  /*
  ShowMessage = () => {
    alert('Message: Hello World - Arrow');
  };
  
  ShowMessage = (message: string) => {
    alert(message + '- Arrow');
  };
  */
  /*
  //3️⃣ Function expression ❌ Not recommended
  ShowMessage = function () {
    alert('Message: Hello World - Expression');
  };
  
  ShowMessage= function (message: string) {
    alert(message + '- Expression');
  };
  */
  //4️⃣ Optional parameter - Clean
  /*
  ShowMessage(message?: string) {
    alert('Clean ' + (message ?? 'Null Check-Message: Hello World'));
  }
  */
  //5️⃣ Default parameter (Very common) - ✔ Recommended final version
  ShowMessage(message: string = 'Default Message: Hello World') {
    alert(message);
  }

  //7️⃣ Private / Public methods (Best practice) - //will not invoked from ui event but can be called via another public method
  /*
  public ShowMessage(message: string) {
    this.LogMessage(message);
    alert(message);
  }
  private LogMessage(message: string) {
    console.log(message);
  }
    */

  //Various Approaches to create Funtion - with return statements

  DisplayMessage() {
    alert('Calling Get Message - ' + this.getMessage());
    alert('Calling Get Param Message - ' + this.getMessage('WithParam'));
    alert('Calling Get Boolean - ' + this.isAdmin('Admin'));
    alert('Calling Get User Object - ' + JSON.stringify(this.getUser1()));
    alert('Calling Get Roles - ' + this.getRoles());
    //alert('Calling Get User Class Object - ' +this.getUserObj());
    alert('Calling Tuple Returns Multiple Return Values - ' + this.getStatus());
    alert('Calling Load Data that calls Async this.getData() - ' + this.loadData());
  }

  //1️⃣ Simple return (Primitive value)
  /*
  getMessage(): string {
    return 'Return- Hello World';
  }
  */
  //2️⃣ Return with parameter
  getMessage(name?: string): string {
    return `Hello ${name}`;
  }
  //3️⃣ Return boolean (conditions)
  isAdmin(role: string): boolean {
    return role === 'Admin';
  }

  //4️⃣ Return object
  getUser1() {
    return {
      id: 1,
      name: 'Faisal'
    }
  }
  //5️⃣ Return array
  getRoles(): string[] {
    return ['Admin', 'User', 'Guest'];
  }

  //6️⃣ Return tuple (fixed structure)
  getStatus(): [number, string] {
    return [200, 'Success'];
  }
  //9️⃣ Return Promise (async/await)
  async getData(): Promise<string> {
    return 'Async Result';
  }

  loadData(): string {
    var res: string = '';
    this.getData().then(result => {
      alert(result);
      console.log(result); // Async Result
      res = result;
    })
    return res;
  }

}

