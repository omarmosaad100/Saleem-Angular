import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminAccountService {

  baseUrl = "https://localhost:7016/api/Admin"

  private currentAdminSource = new BehaviorSubject<any | null>(null);

  currentAdmin$ = this.currentAdminSource.asObservable();

  constructor(private http:HttpClient) {  }

  AdminLogin(model:any){
    return this.http.post<any>(this.baseUrl+"/Login",model).pipe(
      map((reponse:any)=>{
        const user = reponse;
        if(user){
          localStorage.setItem("admin_User" , JSON.stringify(user));
          this.currentAdminSource.next(user);
        }
        return user;
      })
    );
  }

  setCurrentAdmin(user:any){
    this.currentAdminSource.next(user);
  }

  logout(){
    localStorage.removeItem("admin_User");
    this.currentAdminSource.next(null);
  }
}
