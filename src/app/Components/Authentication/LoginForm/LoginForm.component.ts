import { Component, OnInit } from '@angular/core';
import { RegisterPatient } from 'src/app/Models/RegisterPatient';
import { RegisterService } from 'src/app/Services/AuthServices/RegisterService/Register.service';

@Component({
  selector: 'app-LoginForm',
  templateUrl: './LoginForm.component.html',
  styleUrls: ['./LoginForm.component.css']
})
export class LoginFormComponent implements OnInit {

  RegisterData :RegisterPatient ;


  constructor(private service:RegisterService){
    this.RegisterData = new RegisterPatient();
  }

  ngOnInit() {
  }

  SubmitData( ):void{}

}
