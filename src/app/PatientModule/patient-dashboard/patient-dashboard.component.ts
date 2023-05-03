import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService as AuthService } from 'src/app/Services/AuthServices/LoginService/Login.service';
import { ProfileImgService } from 'src/app/Services/ProfileImg.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],

})
export class PatientDashboardComponent implements OnInit {

  isCollapsed:boolean = false;
  imgSrc :string = localStorage.getItem("profileImg") ?? "../../../assets/Images/profile.png";
  username:any;

  constructor(private authService : AuthService , private router:Router , private imgService:ProfileImgService){
    this.username = localStorage.getItem("username")?.toString();

    this.imgService.getUrl().subscribe(img=>{
      this.imgSrc = img=="" ? this.imgSrc : img;
    });
    this.router.navigate(['/patient/dashboard/profile']); // routing automatically to profile
  }
  ngOnInit() {
    // let imgLocal = localStorage.getItem("profileImg") ?? "../../../assets/Images/profile.png"
    this.imgService.getUrl().subscribe(img=>{
      this.imgSrc = img=="" ? this.imgSrc : img;
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/Login']);
  }

}
