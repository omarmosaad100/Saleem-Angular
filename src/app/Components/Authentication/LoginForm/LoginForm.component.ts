import { Component, OnInit } from '@angular/core';
import { LoginAsPatient } from 'src/app/Models/Login/LoginAsPatient';
import { LoginService } from 'src/app/Services/AuthServices/LoginService/Login.service';

@Component({
  selector: 'app-LoginForm',
  templateUrl: './LoginForm.component.html',
  styleUrls: ['./LoginForm.component.css']
})
export class LoginFormComponent implements OnInit {

 LoginData :LoginAsPatient ;


  constructor(private service:LoginService){
    this.LoginData = new LoginAsPatient();
  }

  ngOnInit() {
  }

  SubmitData( ):void{
    this.service.SubmitData(this.LoginData);

  }

}
