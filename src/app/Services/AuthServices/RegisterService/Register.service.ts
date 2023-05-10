import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { IRegister } from 'src/app/Models/Register/IRegister';
import { APIUrlConnectionService } from '../../APIUrlConnection.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

errors:{} = {};
url:any;
role = localStorage.getItem("actor");

constructor(private router:Router , private  UrlService: APIUrlConnectionService , private http: HttpClient , private _toastService: ToastService){
 let actor = localStorage.getItem("actor");
 this.url =
   actor=="patient"
    // as patient
    ? `${this.UrlService.GetURL()}/Patient/Register`
    // as doctor
    : `${this.UrlService.GetURL()}/Doctor/Register`
}



SubmitData(data:IRegister): void {

  this.http.post(
    this.url,
    data

  ).subscribe({
    next: (data)=>{
    },
    error: (error)=>{
      if (error?.error?.length > 0) {
        error.error.forEach((e:any) =>
          {
            this._toastService.error( `Error: ${e["description"]}`);
          }

        )
    }
      else {
        let iterator : any;
        for (iterator of  Object.values(error?.error?.errors)) {
          Array.from(iterator).forEach(element => {
            this._toastService.error(element + "❌");
          });
        }
    }



    },
    complete: ()=>{
      if(this.role == "patient")
      {
        this._toastService.success('Patient Added Successfully ❤✅');
        this.router.navigate(['/patient/dashboard/profile']);
      }
      else{
        this._toastService.success('Doctor Added Successfully ❤✅');
        this.router.navigate(["/Doctor/DoctorRegistersPatient"]);

      }
    }

  });

}



}
