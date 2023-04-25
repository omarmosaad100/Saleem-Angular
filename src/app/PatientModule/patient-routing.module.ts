import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { AuthGuard } from '../Guards/auth.guard';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

// doctor routes

const routes: Routes = [

  {path:'' ,
    children:[
      {path:"dashboard" , component : PatientDashboardComponent , canActivate:[AuthGuard], children:[
        {path:"" , component : PatientComponent , canActivate:[AuthGuard]},

      ]},

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
