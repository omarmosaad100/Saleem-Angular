import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { RoutingComponent } from './routing/routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivateBtnDirective } from './Directives/Directives';
import { RegisterFormComponent } from './Components/Authentication/RegisterForm/RegisterForm.component';
import { LoginFormComponent } from './Components/Authentication/LoginForm/LoginForm.component';
import { AuthHeaderComponent } from './Components/Authentication/AuthHeader/AuthHeader.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { AppointmentDetailsFormComponent } from './Components/appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './Components/view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './Components/doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './Components/view-patient-history/view-patient-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ErrorPageComponent,
    RoutingComponent,
    HomePageComponent,

    // Auth Imports
    AuthContainerComponent,
    AuthHeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,

    // directives
    ActivateBtnDirective,
      AppointmentDetailsFormComponent,
      ViewAppointmentComponent,
      DoctorRegistersPatientComponent,
      ViewPatientHistoryComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule

  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
