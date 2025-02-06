import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any = {
    username :  '',
    password :  ''
  };
  router = inject(Router);

  onLogin(){
    if(this.loginObj.username == "admin" && this.loginObj.password == "1122"){
      this.router.navigateByUrl("admin");
    }
    else
    {
      alert("Wrong Credentials")
    }
  }
}
