import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { retry } from 'rxjs';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { IRegisterPatient } from 'src/app/Models/IRegisterPatient';
import { RegisterPatient } from 'src/app/Models/RegisterPatient';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

data:RegisterPatient | undefined;

constructor(private http: HttpClient , private _toastService: ToastService){

}
errors:{} = {};


SubmitData(data:IRegisterPatient): void {
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
