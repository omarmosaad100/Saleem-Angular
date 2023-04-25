import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService as AuthService } from 'src/app/Services/AuthServices/LoginService/Login.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  Title="Saleem";
  isNavbarOpen = false;
  isAuth:boolean


  constructor(private authService : AuthService , private router:Router){
    this.isAuth = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.authService.getLoggedStatus().subscribe(status=>{
      this.isAuth=status;
      console.log(this.isAuth);
    });

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
