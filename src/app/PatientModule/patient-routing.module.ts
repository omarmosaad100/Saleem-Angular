import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { AuthGuard } from '../Guards/auth.guard';

// doctor routes

const routes: Routes = [

  {path:'' ,
    children:[
      {path:"profile" , component : PatientComponent , canActivate:[AuthGuard]},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
