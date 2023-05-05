import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    'https://youssefehab77.bsite.net/api/Patient/Register',
    data

  ).subscribe({
    next: (data)=>{
    },
    error: (error)=>{
      if (error.error?.length > 0) {
        error.error.forEach((e:any) =>
          {
            this._toastService.error( `Error: ${e["description"]}`);
          }

        )
    } else {
        let iterator : any;
        for (iterator of  Object.values(error.error.errors)) {
          Array.from(iterator).forEach(element => {
            this._toastService.error(element + "❌");
          });
        }
    }



    },
    complete: ()=>{
      this._toastService.success('Patient Added Successfully ❤✅');
    }

  });

}



}
