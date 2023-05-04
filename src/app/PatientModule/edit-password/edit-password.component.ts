import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../Services/change-password.service';
import { ChangePassword } from 'src/app/Models/ChangePassword/ChangePassword';
import { PatientLoadingService } from '../Services/patient-loading.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  dataLoaded:any
  errorMessage:string   = "Can't Change password of this Patient ❌";
  successMessage:string = "Password has changed Successfully ❤✅";
  hasError:any;
  success:any;
  data:ChangePassword

  constructor(private http: HttpClient , private service:ChangePasswordService  , private loadingService:PatientLoadingService) {
    this.data = new ChangePassword();
  }

  ngOnInit() {
  }

  SubmitData( ):void{
    this.loadingService.loadPages();

    this.service.submitData(this.data).subscribe({
      next: (data)=>{
       this.dataLoaded = true;

      },
      error: (error)=>{
       this.hasError = true
       this.success = false
       this.dataLoaded = false;
       this.loadingService.unloadPages();
      },
      complete: ()=>{
       this.success = true
       this.hasError = false
       this.dataLoaded = true;

       this.loadingService.unloadPages();

      }

    });
  }

}
