import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AdminAccountService {

  baseUrl = "https://youssefehab77.bsite.net/api/Admin"
  private currentAdminSource = new BehaviorSubject<any | null>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();
  private isLoggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  get isUserLogged(): boolean {
    return !!(localStorage.getItem('admin_User'));
  }

  get isAuthenticated() {
    return this.isLoggedIn.value;
  }

  AdminLogin(model: any) {
    return this.http.post<any>(this.baseUrl + "/Login", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          this.isLoggedIn.next(true);
          localStorage.setItem("admin_User", JSON.stringify(user));
          this.currentAdminSource.next(user);
        }
        return user;
      })
    );
  }

  setCurrentAdmin(user: any) {
    this.currentAdminSource.next(user);
  }

  logout() {
    localStorage.removeItem("admin_User");
    this.currentAdminSource.next(null);
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/Admin/Login']);
    });
  }

  // isAuthenticated(): boolean {
  //   let role = this.currentAdminSource?.value['role'];
  //   return !!(role == "Admin" && this.currentAdminSource?.value['token']);
  // }
}
