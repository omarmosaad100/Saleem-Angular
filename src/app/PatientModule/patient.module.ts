import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { DetailsComponent } from './patient-profile/details/details.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientDrugsComponent } from './patient-Drugs/Patient-Drugs.component';
import { PatientIllnessesComponent } from './patient-illnesses/patient-illnesses.component';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientAppointmentDetailComponent } from './patient-appointment-detail/patient-appointment-detail.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { FormsModule } from '@angular/forms';
import { EditPasswordComponent } from './edit-password/edit-password.component';



@NgModule({
  declarations: [
    PatientComponent,
    PatientDashboardComponent,
    PatientSidebarComponent,
    DetailsComponent,
    // patient profile components
    PatientIllnessesComponent,
    PatientAppointmentsComponent,
    PatientDrugsComponent,
    PatientAppointmentDetailComponent,
    EditPasswordComponent,
    EditProfileFormComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,

    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule
  ],
  providers: [DatePipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class PatientModule { }
