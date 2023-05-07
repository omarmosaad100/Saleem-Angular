import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginAsPatient } from 'src/app/Models/Login/ILoginAsPatient';
import { APIUrlConnectionService } from '../../APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn:BehaviorSubject<boolean>;
  errors:{} = {};
  url:any;

  constructor(private  UrlService: APIUrlConnectionService ,private http: HttpClient , private _toastService: ToastService , private router: Router){
    this.isLoggedIn=new BehaviorSubject<boolean> (this.isUserLogged);

    let actor = localStorage.getItem("actor");
    this.url =
    actor=="patient"
      // as patient
      ? `${this.UrlService.GetURL()}/Patient/Login`
      // as doctor
      : `${this.UrlService.GetURL()}/Doctor/Login`
  }

  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  SubmitData(data:ILoginAsPatient): void {

    this.http.post(
      this.url,
      {
        "userNationalId" : data.userNationalId,
        "password" :data.password
      }
    ).subscribe({
      next: (data:any)=>{
        if(data){
          localStorage.setItem("token" , data['token']);
          this.isLoggedIn.next(true);

          if(data['role'] == 'Patient'){
            localStorage.setItem("role" , data['role']);
            localStorage.setItem("username" , data['username']);
            this.router.navigate(['/patient/dashboard/profile']);
          }

          else if(data['role'] == 'Doctor'){
            localStorage.setItem("role" , data['role']);
            localStorage.setItem("username" , data['username']); //get did
            localStorage.setItem("did" , data['did']); //get did
            this.router.navigate(['/Doctor/DoctorRegistersPatient']);
          }
        }
      },
      error: ()=>{
        this.isLoggedIn.next(false);
        this._toastService.error( 'Please Enter Valid Data ❌');
      },
      complete: ()=>{
        this._toastService.success('Login Successfully ❤✅');
      }

    });

  }

  logout(): void {
    // Perform logout logic here
    localStorage.removeItem('token')
    localStorage.removeItem("username");

    localStorage.removeItem('actor')


    this.isLoggedIn.next(false);
    this.router.navigate(['/Login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.value;
  }

  getLoggedStatus(): Observable<boolean>
  {
    return this.isLoggedIn.asObservable();
  }


}
