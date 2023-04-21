import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { AppointmentDetailsFormComponent } from './Components/appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './Components/view-appointment/view-appointment.component';

const routes: Routes = [
  {path:"" , component : HomePageComponent},
  {path:"Home" , redirectTo:""},

  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},
  {path:"AddAppointment",component : AppointmentDetailsFormComponent},
  {path:"viewAppointment",component : ViewAppointmentComponent},
  {path:"**",component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
