import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AdminAccountService} from "../AdminServices/AdminAuth/admin-acount.service";
import {ToastService} from "angular-toastify";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(//private authService: AdminLoginComponent,
    private authService: AdminAccountService,
    private router: Router,
    private _toastService: ToastService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this._toastService.error('UnAuthorized, Please Login First!');
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/Admin/Login']);
      });
      return false;
    }
  }
}



