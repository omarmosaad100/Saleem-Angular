import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIUrlConnectionService {

constructor() { }
  URL: string = "http://localhost:7016/api";

  GetURL():string{
    return this.URL;
  }
}
