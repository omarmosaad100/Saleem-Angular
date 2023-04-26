import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RoutingComponent} from './routing/routing.component';
import {AppRoutingModule} from './app-routing.module';
import {ActivateBtnDirective} from './Directives/Directives';
import {RegisterFormComponent} from './Components/Authentication/RegisterForm/RegisterForm.component';
import {LoginFormComponent} from './Components/Authentication/LoginForm/LoginForm.component';
import {AuthHeaderComponent} from './Components/Authentication/AuthHeader/AuthHeader.component';
import {AuthContainerComponent} from './Components/Authentication/AuthContainer/AuthContainer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastService, AngularToastifyModule} from 'angular-toastify';
import {HomePageModule} from './HomePageModule/home-page.module';
import {LayoutModule} from './LayoutModule/layout.module';
import {DoctorModule} from './DoctorModule/doctor.module';
import {DoctorRoutingModule} from './DoctorModule/doctor-routing.module';
import {ViewIssuesComponent} from './DoctorModule/view-issues/view-issues.component';
import {PatientModule} from './PatientModule/patient.module';
import {AuthGuard} from './Guards/auth.guard';
import {HomePageComponent} from "./HomePageModule/home-page/home-page.component";
import {AdminModule} from "./AdminModule/admin.module";
import {AdminLayoutModule} from "./AdminModule/admin-layout/admin-layout.module";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,

    // Auth Imports
    AuthContainerComponent,
    AuthHeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,

    // directives
    ActivateBtnDirective,
    ViewIssuesComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule,
    ReactiveFormsModule,

    // custom modules
    HomePageModule,
    LayoutModule,
    DoctorModule,
    PatientModule,
    AdminModule,
    AdminLayoutModule,


  ],
  providers: [ToastService, {
    provide: 'text/css', useValue: 'text/css'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
