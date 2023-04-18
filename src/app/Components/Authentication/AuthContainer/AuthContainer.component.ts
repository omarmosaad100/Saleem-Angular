import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AuthContainer',
  templateUrl: './AuthContainer.component.html',
  styleUrls: ['./AuthContainer.component.css']
})
export class AuthContainerComponent implements OnInit {

  showLoginForm:boolean = false;
  showRegisterForm:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  GetActiveForm(formName:string){
    if(formName == "login"){
      this.showLoginForm = true;
      this.showRegisterForm = false;
    }
    else{
      this.showRegisterForm = true;
      this.showLoginForm = false;
    }
  }
}
