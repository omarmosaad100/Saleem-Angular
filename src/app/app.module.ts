import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingComponent } from './routing/routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivateBtnDirective } from './Directives/Directives';
import { RegisterFormComponent } from './Components/Authentication/RegisterForm/RegisterForm.component';
import { LoginFormComponent } from './Components/Authentication/LoginForm/LoginForm.component';
import { AuthHeaderComponent } from './Components/Authentication/AuthHeader/AuthHeader.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { FormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { HomePageModule } from './HomePageModule/home-page.module';
import { LayoutModule } from './LayoutModule/layout.module';
import { DoctorModule } from './DoctorModule/doctor.module';
import { DoctorRoutingModule } from './DoctorModule/doctor-routing.module';


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
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule,

    // custom modules
    HomePageModule,
    LayoutModule,
    DoctorModule,



  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
