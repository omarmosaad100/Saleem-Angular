import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-AuthHeader',
  templateUrl: './AuthHeader.component.html',
  styleUrls: ['./AuthHeader.component.css']
})
export class AuthHeaderComponent implements OnInit {

  @Output() ActiveFormEvent  = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ShowForm(formName:string){
    this.ActiveFormEvent.emit(formName);

  }

}
