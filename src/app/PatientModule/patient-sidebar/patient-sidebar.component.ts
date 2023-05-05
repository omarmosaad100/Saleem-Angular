import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent implements OnInit {

  @Output() CollapseHandler = new EventEmitter<boolean>();
  isCollapsed:boolean = false;

  constructor() { }

  CollapseHandlerFun() {
    this.CollapseHandler.emit(!this.isCollapsed);
  }

  ngOnInit() {
  }

}
