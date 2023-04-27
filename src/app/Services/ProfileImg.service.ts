import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileImgService {

  private urlImg: Subject<string> = new Subject<string>();
  private src:string = "";

  constructor() {
    this.urlImg.subscribe((value: string) => {
      this.src = value;
    });
   }


  public setUrl(value: string): void {
    this.urlImg.next(value);
  }
  public getUrl(): Observable<string> {
    return this.urlImg
  }

}
