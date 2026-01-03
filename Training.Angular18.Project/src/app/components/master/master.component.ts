import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../counter/counter.component';
import { NotesComponent } from '../notes/notes.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDemoComponent } from '../custom-directive-demo/custom-directive-demo.component';
import { AngularPipeDemoComponent } from "../angular-pipe-demo/angular-pipe-demo.component";

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CustomDirectiveDemoComponent, RolesComponent, DesignationComponent, NotesComponent, CounterComponent, CommonModule, FormsModule, AngularPipeDemoComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})

export class MasterComponent {
  currentComponent: string = 'Designation';
  changeTab(tabName: string) {
    this.currentComponent = tabName;
    //alert(tabName);
  }

      parentNotes = 'Note from parent 1,Note from parent 2,Note from parent 3';


}
