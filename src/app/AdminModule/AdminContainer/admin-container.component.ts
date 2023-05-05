import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.css']
})
export class AdminContainerComponent {

  isCollapsed:any;

  CollapseHandler(state:boolean){
    this.isCollapsed = state;
  }
}
