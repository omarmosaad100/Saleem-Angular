import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrlConnectionService } from 'src/app/Services/APIUrlConnection.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


constructor(private http: HttpClient , private ApiUrl : APIUrlConnectionService ){

}

getSpecialties() {
  return this.http.get(
    `${this.ApiUrl.GetURL()}/Home`
  );

}

}
