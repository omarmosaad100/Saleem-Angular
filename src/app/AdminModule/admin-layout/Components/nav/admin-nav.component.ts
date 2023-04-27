import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminAccountService} from 'src/app/AdminModule/AdminServices/AdminAuth/admin-acount.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  Title = "Saleem Admin";
  loggedIn = this.adminAccountService.isUserLogged;

  constructor(private adminAccountService: AdminAccountService) {
  }

  logout() {
    this.adminAccountService.logout();
  }
}
