import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIUrlConnectionService {

constructor() { }
  URL: string = "https://youssefehab77.bsite.net/api" ;

  GetURL():string{
    return this.URL;
  }
}
