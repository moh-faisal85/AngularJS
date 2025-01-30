import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
userObj:any=
  {
    firstName:'',
    lastName:'',
    userName:'',
    city:'',
    state:'TamilNadu',
    zipCode:'',
    isTermsAggree:false
  }

  onSave()
  {
    debugger;
    const formValue = this.userObj;
  }

}
