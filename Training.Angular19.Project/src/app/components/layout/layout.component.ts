import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  route = inject(Router);
  logOut()
  {
    localStorage.removeItem("angular19User");
    
    this.route.navigateByUrl("login");
  }
}
