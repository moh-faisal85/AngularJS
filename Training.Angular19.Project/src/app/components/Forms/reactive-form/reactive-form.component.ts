import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    fName : new FormControl(""),
    lName: new FormControl(""),
    uName: new FormControl(""),
    city : new FormControl(""),
    state : new FormControl("TamilNadu"),
    zip: new FormControl(),
    isAgree : new FormControl(false)
  })

  onUserSubmit()
  {
    const formValue = this.userForm.value;
    debugger;
  }
}
