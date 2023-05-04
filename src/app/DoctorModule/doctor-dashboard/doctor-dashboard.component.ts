import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  isCollapsed:boolean = false;
  imgSrc :string = localStorage.getItem("profileImg") ?? "../../../assets/Images/profile.png";
  username:any;
  loading: any;

  constructor(private router:Router){

    this.username = localStorage.getItem("username")?.toString();

    // this.router.navigate(['/']); // routing automatically to profile
  }
  ngOnInit() {

  }
  logout(){
    //this.authService.logout();
    this.router.navigate(['/Login']);
  }



}
