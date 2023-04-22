import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


constructor(private http: HttpClient ){

}

getSpecialties() {
  return this.http.get(
    'https://localhost:44318/api/Home'
  );

}

}
