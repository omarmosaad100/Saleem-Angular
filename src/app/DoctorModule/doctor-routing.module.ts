import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { AppointmentDetailsFormComponent } from './appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './view-patient-history/view-patient-history.component';
import { ViewIssuesComponent } from './view-issues/view-issues.component'
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';



// doctor routes

const routes: Routes = [

  // {path:'' , component:DoctorDashboardComponent},
  {path:'' , component:DoctorDashboardComponent , children:[
    {path:"AddAppointment",component : AppointmentDetailsFormComponent},
    {path:"viewAppointment",component : ViewAppointmentComponent},
    {path:"DoctorRegistersPatient",component : DoctorRegistersPatientComponent},
    {path:"ViewPatientHistory/:nid",component : ViewPatientHistoryComponent},
    {path:"ViewIssues/:pid",component : ViewIssuesComponent},
  ]},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
