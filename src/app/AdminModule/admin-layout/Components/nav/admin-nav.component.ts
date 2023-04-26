import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService as AuthService } from 'src/app/Services/AuthServices/LoginService/Login.service';
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  Title="Saleem Admin";
}
