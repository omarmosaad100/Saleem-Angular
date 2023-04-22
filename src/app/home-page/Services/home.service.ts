import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

//
data:[] = [];

constructor(private http: HttpClient ){

}

getData():any{
 return this.data;
}

getSpecialties() {
  return this.http.get(
    'https://localhost:44318/api/Home'
  );

}

}
