import { Component, OnInit } from '@angular/core';
import { RegisterAsPatient } from 'src/app/Models/Register/RegisterAsPatient';
import { ProfileService } from '../Services/profile.service';
import { HttpClient } from '@angular/common/http';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { EditProfileService } from '../Services/edit-profile.service';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'patient-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {

  gender:string = "Male";
  ProfileData :any ;
  errorMessage:string = "Can't edit this Patient ❌";
  successMessage:string = "Patient Edited Successfully ❤✅";
  hasError:any;
  success:any;


  selectedFile: File | null = null;

  constructor(private profileService:ProfileService , private http: HttpClient ,
     private service:EditProfileService
     ){
    this.ProfileData = new RegisterAsPatient();
  }
  ngOnInit() {
    this.profileService.getPatientData().subscribe(
      (data)=>{
        this.ProfileData = data;
      }
    )
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file

    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //   this.saveFile(e.target.result);
    // };
    // reader.readAsDataURL(this.selectedFile);
  }

  saveFile(fileContent: string) {
    // const formData = new FormData();
    // formData.append('file', fileContent);
    // this.http.post('/api/saveFile', formData).subscribe((response: any) => {
    //   console.log(response);
    //   // Optionally display a success message to the user
    // });
  }

  SubmitData( ):void{
    console.log("click")
    if(this.gender == 'Male'){
        this.ProfileData.gender = GenderEnum.Male // 0
    }
    else{
      this.ProfileData.gender = GenderEnum.Female  // 1
    }

    this.ProfileData.imgPath = "string";
    this.service.submitData(this.ProfileData).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (error)=>{
       this.hasError = true
      },
      complete: ()=>{
       this.success = true

      }

    });
  }

}
