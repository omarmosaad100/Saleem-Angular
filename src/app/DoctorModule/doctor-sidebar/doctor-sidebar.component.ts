import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.css']
})
export class DoctorSidebarComponent {


  @Output() CollapseHandler = new EventEmitter<boolean>();
  isCollapsed:boolean = false;

  constructor() { }

  CollapseHandlerFun() {
    this.CollapseHandler.emit(!this.isCollapsed);
  }

}
