import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent , NotesComponent, CounterComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})

export class MasterComponent {
  currentComponent: string = 'Designation';
  changeTab(tabName: string) {
    this.currentComponent = tabName;
    //alert(tabName);
  }
}
