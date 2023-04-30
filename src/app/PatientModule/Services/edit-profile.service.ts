import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrlConnectionService } from 'src/app/Services/APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  private token = localStorage.getItem('token') || '';
  private headers = { Authorization: 'Bearer ' + this.token };

  constructor(private httpRequest:HttpClient , private url:APIUrlConnectionService ) {

}




submitData(data:any): Observable<any> {
    return this.httpRequest.put(
      `${this.url.GetURL()}/Patient/EditPatienProfile`,
      {
        "name": data.name,
        "age": data.age,
        "gender": data.gender,
        "imgPath": data.imgPath,
        "phoneNumber": data.phoneNumber,
        "email":data.email
      },
      { headers : this.headers }
    )

  }
}
