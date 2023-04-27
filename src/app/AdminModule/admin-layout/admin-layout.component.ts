import { Component, OnInit } from '@angular/core';
import { AdminAccountService } from '../AdminServices/AdminAuth/admin-acount.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private adminAccountService:AdminAccountService){}
  ngOnInit(): void {
    this.setCurrentAdmin();
  }
  setCurrentAdmin(){
    const userString = localStorage.getItem("admin_User");
    if(!userString) return;
    const user:any = JSON.parse(userString);
    this.adminAccountService.setCurrentAdmin(user);
  }
}
