import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userForm: FormGroup = new FormGroup({
    fName : new FormControl("",[Validators.required]),
    lName: new FormControl("", [Validators.required,Validators.minLength(5)]),
    //uName: new FormControl("", [Validators.pattern("")]),
    uName: new FormControl("", [Validators.email]),
    city : new FormControl(""),
    state : new FormControl("TamilNadu"),
    zip: new FormControl(),
    isAgree : new FormControl(false)
  })

  
  constructor() {
    this.userForm.controls['state'].disable();
    setTimeout(()=>
      {
      this.userForm.controls['state'].enable();
      }, 5000);
    
  }

  onUserSubmit()
  {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      
      debugger;
    }
  }
  onClear()
  {
    this.userForm.reset();
  }
}
