import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { FormComponent } from './components/form/form.component';
import { FormlistComponent } from './components/formlist/formlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MasterComponent, FormComponent,FormlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // carNames:string[]=[];
  // onCarAdded(carName:string)
  // {
  //   this.carNames.push(carName);
  //   console.log(carName, 'From App Component');
  // }
}
