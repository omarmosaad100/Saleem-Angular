import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { Specialization } from 'src/app/Enums/Specialization.enum';
import { IRegister } from 'src/app/Models/Register/IRegister';
import { RegisterAsDoctor } from 'src/app/Models/Register/RegisterAsDoctor';
import { RegisterAsPatient } from 'src/app/Models/Register/RegisterAsPatient';
import { RegisterService } from 'src/app/Services/AuthServices/RegisterService/Register.service';

@Component({
  selector: 'app-RegisterForm',
  templateUrl: './RegisterForm.component.html',
  styleUrls: ['./RegisterForm.component.css']
})
export class RegisterFormComponent implements OnInit {

  gender:string = "Male";
  RegisterData :any ;
  errorMessages:""[] = [];
  successMessage:string = "";
  isAdded:any;
  isRoleDoctor = localStorage.getItem("actor")=="doctor" ;
  specification:any;

  AllSpecialization:string[] = 
    [
      'Cardiologist',
      "Dermatologist",
      "Endocrinologist",
      "Gastroenterologist",
      "Hematologist",
      "Neurologist",
      "Oncologist",
      "Ophthalmologist",
      "Orthopedist",
      "Otolaryngologist",
      "Pediatrician",
      "Psychiatrist",
      "Pulmonologist",
      "Radiologist",
      "Urologist"
  ]
  
  constructor(private service:RegisterService){
    this.RegisterData = 
    this.isRoleDoctor 
    ? new RegisterAsDoctor()
    :new RegisterAsPatient(); 

  }
  ngOnInit(): void {

  }


  getGenderValue(){
    if(this.gender == 'Male'){
      this.RegisterData.gender = GenderEnum.Male // 0
    }
    else{
      this.RegisterData.gender = GenderEnum.Female  // 1
    }
  }


  SubmitData( ):void{
    console.log(this.RegisterData);
    this.getGenderValue();
    this.service.SubmitData(this.RegisterData);
  }

  getAllSpecialization(){
    return this.AllSpecialization;
  }


  

}
