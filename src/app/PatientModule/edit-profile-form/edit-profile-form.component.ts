import { Component, OnInit } from '@angular/core';
import { RegisterAsPatient } from 'src/app/Models/Register/RegisterAsPatient';
import { ProfileService } from '../Services/profile.service';
import { HttpClient } from '@angular/common/http';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { EditProfileService } from '../Services/edit-profile.service';
import { ToastService } from 'angular-toastify';
import { CloudinaryService } from '../Services/cloudinary.service';
import { ProfileImgService } from 'src/app/Services/ProfileImg.service';

@Component({
  selector: 'patient-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {

  imgPath:string = "";
  gender:string = "Male";
  ProfileData :any ;
  errorMessage:string = "Can't edit this Patient ❌";
  successMessage:string = "Patient Edited Successfully ❤✅";
  hasError:any;
  success:any;


  selectedFile: File | null = null;

  constructor(private profileService:ProfileService , private http: HttpClient , private service:EditProfileService
    ,private cloudService:CloudinaryService , private imgService:ProfileImgService
  ){
    this.ProfileData = new RegisterAsPatient();
  }
  ngOnInit() {
    this.profileService.getPatientData().subscribe(
      (data)=>{
        this.ProfileData = data;
        this.gender = GenderEnum[data.gender]
        this.imgPath = data.imgPath;

      }
    )
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'sy3ny4xr');

    this.http.post('https://api.cloudinary.com/v1_1/dnvinlruh/image/upload', formData)
      .subscribe((res:any) => {
        console.log(res);
        const imageUrl = this.cloudService.cl.url(res.public_id, { width: 200, height: 200, crop: 'fill' });
        // Save the imageUrl to your user profile or database
        this.imgPath = imageUrl;
        this.imgService.setUrl (imageUrl);
        localStorage.setItem("profileImg" , imageUrl);
      });
  }

  SubmitData( ):void{
    console.log(this.imgPath)
    if(this.gender == 'Male'){
        this.ProfileData.gender = GenderEnum.Male // 0
    }
    else{
      this.ProfileData.gender = GenderEnum.Female  // 1
    }

    this.ProfileData.imgPath = this.imgPath;

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
