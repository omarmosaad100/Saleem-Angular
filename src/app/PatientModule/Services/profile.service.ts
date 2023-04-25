import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIUrlConnectionService } from 'src/app/Services/APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

private token = localStorage.getItem('token') || '';
private headers = { Authorization: 'Bearer ' + this.token };

constructor(private httpRequest:HttpClient , private url:APIUrlConnectionService) {

}

getPatientData(): Observable<any> {
  let data:any = this.httpRequest
  .get(
    `${this.url.GetURL()}/Patient/GetPatientDetails`,
    { headers : this.headers }
  )

  return data;

}


}
