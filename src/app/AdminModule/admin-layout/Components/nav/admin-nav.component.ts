import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAccountService } from 'src/app/AdminModule/AdminServices/AdminAuth/admin-acount.service';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  Title="Saleem Admin";

  //#region negmTest
  constructor(private adminAccountService: AdminAccountService){}
    model:any = {};
    loggedIn = false;


    userToken:any;
    userRole:any;
    userExpiry:any;

    login(){
      this.adminAccountService.AdminLogin(this.model).subscribe({
        next:(response:any)=>{
          console.log(response); // token , expiry , role
          //add logic to add token to local storage or cookies
          this.userToken = response.value["token"]
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
      this.loggedIn = false;
    }
  //#endregion
}
