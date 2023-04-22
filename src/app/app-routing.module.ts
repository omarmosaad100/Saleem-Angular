import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { AppointmentDetailsFormComponent } from './Components/appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './Components/view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './Components/doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './Components/view-patient-history/view-patient-history.component';
const routes: Routes = [
  {path:"" , component : HomePageComponent},
  {path:"Home" , redirectTo:""},

  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},
  {path:"AddAppointment",component : AppointmentDetailsFormComponent},
  {path:"viewAppointment",component : ViewAppointmentComponent},
  {path:"DoctorRegistersPatient",component : DoctorRegistersPatientComponent},
  {path:"ViewPatientHistory",component : ViewPatientHistoryComponent},
  {path:"**",component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
