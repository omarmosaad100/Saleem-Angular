import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../Services/change-password.service';
import { ChangePassword } from 'src/app/Models/ChangePassword/ChangePassword';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  errorMessage:string = "Can't Change password of this Patient ❌";
  successMessage:string = "Password has changed Successfully ❤✅";
  hasError:any;
  success:any;
  data:ChangePassword

  constructor(private http: HttpClient , private service:ChangePasswordService) {
    this.data = new ChangePassword();
  }

  ngOnInit() {
  }

  SubmitData( ):void{

    this.service.submitData(this.data).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error: (error)=>{
       this.hasError = true
       this.success = false

      },
      complete: ()=>{
       this.success = true
       this.hasError = false


      }

    });
  }

}
