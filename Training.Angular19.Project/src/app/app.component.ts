import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { UserComponent } from './components/user/user.component';
// import { AdminComponent } from './components/admin/admin.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
// import { NgIfComponent } from './components/ng-if/ng-if.component';
// import { NgForComponent } from './components/ng-for/ng-for.component';
// import { NgClassComponent } from './components/ng-class/ng-class.component';
// import { NgStyleComponent } from './components/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet,UserComponent,AdminComponent,DataBindingComponent,NgIfComponent,NgForComponent, NgClassComponent,NgStyleComponent],
  imports: [RouterOutlet, RouterLink,  NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Training.Angular19.Project';
  showScroll: boolean = false;

  // Detect scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScroll = window.pageYOffset > 200;
  }

  // Scroll to top logic
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
