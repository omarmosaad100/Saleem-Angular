import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';

import { ErrorPageComponent } from './LayoutModule/Components/error-page/error-page.component';
import { HomePageComponent } from './HomePageModule/home-page/home-page.component';
import { LayoutComponent } from './LayoutModule/layout.component';

// doctor routes
import { DoctorComponent } from './DoctorModule/doctor.component';
import { AppointmentDetailsFormComponent } from './DoctorModule/appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './DoctorModule/view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './DoctorModule/doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './DoctorModule/view-patient-history/view-patient-history.component';
import { DoctorRoutingModule } from './DoctorModule/doctor-routing.module';


const routes: Routes = [
  {path:"" , component : LayoutComponent,children:[
    {path:"" , component:HomePageComponent },
    {path:""
      ,loadChildren: () => import('./DoctorModule/doctor.module')
      .then(m => m.DoctorModule)
    },

  ]},


  {path:"Home" , redirectTo:""},


  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},

  {path:"**",component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
