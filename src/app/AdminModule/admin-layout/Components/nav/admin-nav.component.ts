import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
  isCollapsed:boolean = false;

  @Output() CollapseHandler = new EventEmitter<boolean>();

  constructor(private adminAccountService: AdminAccountService) {
  }

  logout() {
    this.adminAccountService.logout();
  }

  CollapseHandlerFun() {
    this.isCollapsed = !this.isCollapsed
    this.CollapseHandler.emit(this.isCollapsed);
  }
}
