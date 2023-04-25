import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { ScheduleDrugsComponent } from './patient-profile/schedule-drugs/schedule-drugs.component';
import { DetailsComponent } from './patient-profile/details/details.component';
import { IllnessesComponent } from './patient-profile/illnesses/illnesses.component';



@NgModule({
  declarations: [
    PatientComponent,
    PatientDashboardComponent,
    PatientSidebarComponent,

    // patient profile components
    DetailsComponent,
    IllnessesComponent,
    ScheduleDrugsComponent

  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class PatientModule { }
