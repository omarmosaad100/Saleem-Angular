import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { APIUrlConnectionService } from 'src/app/Services/APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnInit{

data:any
constructor(private httpRequest:HttpClient , private url:APIUrlConnectionService) {

}

ngOnInit(): void {
  this.data = this.httpRequest
  .get(
    `${this.url.GetURL()}/Patient/GetPatientDetails`
  )
  console.log(this.data);
}


}
