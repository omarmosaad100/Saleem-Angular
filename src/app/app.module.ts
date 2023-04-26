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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { AdminContainerComponent } from './AdminModule/AdminContainer/admin-container.component';
import { DeleteDrugComponent } from './AdminModule/delete-drug/delete-drug.component';
import { AddDrugComponent } from './AdminModule/add-drug/add-drug.component';
import { GetAllDrugsComponent } from './AdminModule/get-all-drugs/get-all-drugs.component';
import { GetDrugByIdComponent } from './AdminModule/get-drug-by-id/get-drug-by-id.component';
import { UpdateDrugComponent } from './AdminModule/update-drug/update-drug.component';
import { GetAllDoctorsComponent } from './AdminModule/get-all-doctors/get-all-doctors.component';
import { AddLicenseComponent } from './AdminModule/add-license/add-license.component';
import { AddIssueComponent } from './AdminModule/add-issue/add-issue.component';


import { HomePageModule } from './HomePageModule/home-page.module';
import { LayoutModule } from './LayoutModule/layout.module';
import { DoctorModule } from './DoctorModule/doctor.module';
import { DoctorRoutingModule } from './DoctorModule/doctor-routing.module';
import { ViewIssuesComponent } from './DoctorModule/view-issues/view-issues.component';
import { PatientModule } from './PatientModule/patient.module';
import { AuthGuard } from './Guards/auth.guard';
import {HomePageComponent} from "./HomePageModule/home-page/home-page.component";


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    //HomePageComponent,
    DeleteDrugComponent,
    AddDrugComponent,

    // Auth Imports
    AuthContainerComponent,
    AuthHeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,

    // directives
    ActivateBtnDirective,
      ViewIssuesComponent,
    AdminContainerComponent,
    GetAllDrugsComponent,
    GetDrugByIdComponent,
    UpdateDrugComponent,
    GetAllDoctorsComponent,
    AddLicenseComponent,
    AddIssueComponent,

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
    PatientModule

  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
