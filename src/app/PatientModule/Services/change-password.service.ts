import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrlConnectionService } from 'src/app/Services/APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private httpRequest:HttpClient,private url:APIUrlConnectionService) { }

  private token = localStorage.getItem('token') || '';
  private headers = { Authorization: 'Bearer ' + this.token };


  submitData(data:any): Observable<any> {

    return this.httpRequest.post(
      `${this.url.GetURL()}/Patient/changePassword`,
      {
        "oldPassword":data.oldPassword,
        "newPassword":data.newPassword
      },
      { headers : this.headers }
    )

  }

}
