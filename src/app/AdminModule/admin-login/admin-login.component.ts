import {Component, OnInit} from '@angular/core';
import {AdminAccountService} from '../AdminServices/AdminAuth/admin-acount.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  //#region negmTest
  constructor(private adminAccountService: AdminAccountService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  model: any = {};
  loggedIn = false;

  userToken: any;
  userRole: any;
  userExpiry: any;

  // get isAuthenticated() {
  //   return this.loggedIn;
  // }

  getCurrentUser() {
    this.adminAccountService.currentAdmin$.subscribe({
      next: user => this.loggedIn = !!user, //convert user to boolean
      error: error => console.log(error),
    })
  }

  login() {
    this.adminAccountService.AdminLogin(this.model).subscribe({
      next: (response: any) => {
        this.userToken = response["token"]
        this.userRole = response["role"]
        this.userExpiry = response["expiry"]
        this.loggedIn = true;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/Admin/GetAllDrugs']);
        });
      }
    })
  }
  logout() {
    this.adminAccountService.logout();
    this.loggedIn = false;
  }
}
