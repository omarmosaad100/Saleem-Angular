import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDetailsFormComponent } from './appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './view-patient-history/view-patient-history.component';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorSidebarComponent } from './doctor-sidebar/doctor-sidebar.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        // doctor component
        AppointmentDetailsFormComponent,
        ViewAppointmentComponent,
        DoctorRegistersPatientComponent,
        ViewPatientHistoryComponent,
        DoctorComponent,
        DoctorSidebarComponent,
        DoctorDashboardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        // LayoutModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        DoctorRoutingModule

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class DoctorModule { }
