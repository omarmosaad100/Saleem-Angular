import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { ILoginAsPatient } from 'src/app/Models/Login/ILoginAsPatient';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient , private _toastService: ToastService){

  }
  errors:{} = {};


  SubmitData(data:ILoginAsPatient): void {
    this.http.post(
      'https://localhost:7016/api/Patient/Login',
      {
        "userNationalId" : data.userNationalId,
        "password" :data.password
      }
    ).subscribe({
      next: (data:any)=>{
        if(data){
          localStorage.setItem("token" , data['token']);
        }
      },
      error: (error)=>{
        console.log(error);

        this._toastService.error( 'Please Enter Valid Data ❌');
      },
      complete: ()=>{
        this._toastService.success('Login Successfully ❤✅');
      }

    });

  }



  }
