import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { RegisterAsPatient } from 'src/app/Models/Register/RegisterAsPatient';
import { RegisterService } from 'src/app/Services/AuthServices/RegisterService/Register.service';

@Component({
  selector: 'app-RegisterForm',
  templateUrl: './RegisterForm.component.html',
  styleUrls: ['./RegisterForm.component.css']
})
export class RegisterFormComponent implements OnInit {

  gender:string = "Male";
  RegisterData :RegisterAsPatient ;
  errorMessages:""[] = [];
  successMessage:string = "";
  isAdded:any;

  constructor(private service:RegisterService){
    this.RegisterData = new RegisterAsPatient();
  }
  ngOnInit(): void {

  }


  SubmitData( ):void{
    if(this.gender == 'Male'){
        this.RegisterData.gender = GenderEnum.Male
    }
    else{
      this.RegisterData.gender = GenderEnum.Female
    }

    this.service.SubmitData(this.RegisterData);
  }


}
