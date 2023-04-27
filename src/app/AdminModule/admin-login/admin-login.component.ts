import { Component, OnInit } from '@angular/core';
import { AdminAccountService } from '../AdminServices/AdminAuth/admin-acount.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  //#region negmTest
  constructor(private adminAccountService: AdminAccountService){}

    ngOnInit(): void {
      this.getCurrentUser();
    }

    model:any = {};
    loggedIn = false;

    userToken:any;
    userRole:any;
    userExpiry:any;



    getCurrentUser(){
      this.adminAccountService.currentAdmin$.subscribe({
        next:user=>this.loggedIn = !!user, //convert user to boolean
        error:error=>console.log(error),
      })
    }

    login(){
      this.adminAccountService.AdminLogin(this.model).subscribe({
        next:(response:any)=>{
          this.userToken = response["token"]
          this.userRole = response["role"]
          this.userExpiry = response["expiry"]
          this.loggedIn = true;
        },
        error: error=>{
          console.log(error);
        }
      })
    }


    logout(){
      this.adminAccountService.logout();
      this.loggedIn = false;
    }

  //#endregion
}
