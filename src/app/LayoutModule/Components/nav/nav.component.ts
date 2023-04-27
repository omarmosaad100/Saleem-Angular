import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService as AuthService } from 'src/app/Services/AuthServices/LoginService/Login.service';
import { ProfileImgService } from 'src/app/Services/ProfileImg.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  Title="Saleem";
  isNavbarOpen = false;
  isAuth:boolean
  imgSrc:string  ;


  constructor(private authService : AuthService , private router:Router, private imgService:ProfileImgService){
    this.isAuth = this.authService.isAuthenticated();
    this.imgSrc = localStorage.getItem("profileImg") ??  "../../../../assets/Images/profile.png"
  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status=>{
      this.isAuth=status;
      console.log(this.isAuth);
    });

    // this.imgService.getImgUrl().subscribe(img=>{
    //   console.log(img);
    //   this.imgSrc = img ?? "../../../../assets/Images/profile.png"
    // });


  }

  getProfile(){
    let role = localStorage.getItem("role");
    if(role == 'Patient'){
      this.router.navigate(['/patient/dashboard/profile'])
    }
  }




  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  logout(){
    this.authService.logout();
  }

}
