import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { DetailsComponent } from './patient-profile/details/details.component';
import { patientappointmentsCompenent } from './patient-appointments/patient-appointments.component';
import { PatientDrugsComponent } from './patient-Drugs/Patient-Drugs.component';
import { PatientIllnessesComponent } from './patient-illnesses/patient-illnesses.component';
import { PatientAppointmentDetailComponent } from './patient-appointment-detail/patient-appointment-detail.component';



@NgModule({
  declarations: [
    PatientComponent,
    PatientDashboardComponent,
    PatientSidebarComponent,
    DetailsComponent,
    // patient profile components
    PatientIllnessesComponent,
    patientappointmentsCompenent,
    PatientDrugsComponent,
    PatientAppointmentDetailComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ],
  providers: [DatePipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class PatientModule { }
