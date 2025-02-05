import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit{
  @Input() tabList: string[] = [];
  @Output() onTabClicked = new EventEmitter<string>();

  currentTab:string = '';
  
  ngOnInit(): void {
    this.currentTab = this.tabList[1];  
  }

  //Add below event as part of click event from dynamic button of tab.component.html
  onTabChange(tabName: string)
  {
    debugger;
    this.currentTab = tabName;
    this.onTabClicked.emit(tabName);
  }
}
