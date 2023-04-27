import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService as AuthService } from 'src/app/Services/AuthServices/LoginService/Login.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],

})
export class PatientDashboardComponent implements OnInit {

  isCollapsed:boolean = false;
  username:any;
  constructor(private authService : AuthService , private router:Router){
    this.username = localStorage.getItem("username")?.toString();
  }
  ngOnInit() {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/Login']);
  }

}
