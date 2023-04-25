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

  constructor(private  UrlService: APIUrlConnectionService ,private http: HttpClient , private _toastService: ToastService , private router: Router){
    this.isLoggedIn=new BehaviorSubject<boolean> (this.isUserLogged);

  }

  get isUserLogged(): boolean
  {
    return  (localStorage.getItem('token'))? true: false
  }

  SubmitData(data:ILoginAsPatient): void {
    this.http.post(
      `${this.UrlService.GetURL()}/Patient/Login`,
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
            this.router.navigate(['/patient/dashboard/profile']);
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
