import { HttpClient } from '@angular/common/http';
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

  apiLoginObj:any = {
    emailId:"Test@faisal.com",
    password:"111"


  };
  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    // if(this.loginObj.username == "admin" && this.loginObj.password == "1122"){
    //   this.router.navigateByUrl("admin");
    // }
    // else
    // {
    //   alert("Wrong Credentials")
    // }
    //Note: Update the API domain name in proxy.conf.json file - "target": "https://projectapi.gerasim.in",
    this.http.post("/api/UserApp/login" , this.apiLoginObj).subscribe((res:any) => {
      debugger;
      localStorage.setItem("angular19User", res.data.userId);
      localStorage.setItem("angular19Token", res.data.token);
      
      this.router.navigateByUrl("admin");
    }, error => {
      debugger;
      alert("Wrong Credentials");
    })
  }
}
