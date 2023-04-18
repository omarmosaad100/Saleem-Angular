import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { IRegisterAsPatient } from 'src/app/Models/Register/IRegisterAsPatient';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


constructor(private http: HttpClient , private _toastService: ToastService){

}
errors:{} = {};


SubmitData(data:IRegisterAsPatient): void {
  this.http.post(
    'https://localhost:7016/api/Patient/Register',
    data

  ).subscribe({
    next: (data)=>{
      console.log(data);
    },
    error: (error)=>{
      this._toastService.error( 'Please Enter Valid Data ❌');
    },
    complete: ()=>{
      this._toastService.success('Patient Added Successfully ❤✅');
    }

  });

}



}
