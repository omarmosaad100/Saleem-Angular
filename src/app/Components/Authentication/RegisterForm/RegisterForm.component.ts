import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { RegisterPatient } from 'src/app/Models/RegisterPatient';
import { RegisterService } from 'src/app/Services/AuthServices/RegisterService/Register.service';

@Component({
  selector: 'app-RegisterForm',
  templateUrl: './RegisterForm.component.html',
  styleUrls: ['./RegisterForm.component.css']
})
export class RegisterFormComponent implements OnInit {

  gender:string = "Male";
  RegisterData :RegisterPatient ;
  errorMessages:""[] = [];
  successMessage:string = "";
  isAdded:any;

  constructor(private service:RegisterService){
    this.RegisterData = new RegisterPatient();
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
    // console.log(result)
    // if(result.status == "error"){
    //   console.log(result.errorMessage);
    //   for (const iterator of result.errorMessage) {
    //     this.errorMessages.push(result.errorMessage["description"]);
    //   }
    //   this.isAdded = false;

    // }
    // else{
    //   this.isAdded = true;

    //   this.successMessage = result.successMessage
    // }
  }


}
