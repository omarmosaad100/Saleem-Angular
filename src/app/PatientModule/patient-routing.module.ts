import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { AuthGuard } from '../Guards/auth.guard';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientDrugsComponent } from './patient-Drugs/Patient-Drugs.component';
import { PatientAppointmentsComponent   } from './patient-appointments/patient-appointments.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { DonationComponent } from './donation/donation.component';

// doctor routes

const routes: Routes = [

  {path:'' ,
    children:[
      {path:"dashboard",component : PatientDashboardComponent , canActivate:[AuthGuard],

      children:[
        {path:"profile" ,component : PatientComponent  , pathMatch:'full' },
        {path:"appointments" , component : PatientAppointmentsComponent },
        {path:"drugs" , component : PatientDrugsComponent },
        {path:"edit" , component : EditProfileFormComponent },
        {path:"changePassword" , component : EditPasswordComponent },
        {path:"donate" , component : DonationComponent },

      ]},


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
