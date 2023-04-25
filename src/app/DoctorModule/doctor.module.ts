import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentDetailsFormComponent } from './appointment-details-form/appointment-details-form.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { DoctorRegistersPatientComponent } from './doctor-registers-patient/doctor-registers-patient.component';
import { ViewPatientHistoryComponent } from './view-patient-history/view-patient-history.component';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { LayoutModule } from "../LayoutModule/layout.module";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        // doctor component
        AppointmentDetailsFormComponent,
        ViewAppointmentComponent,
        DoctorRegistersPatientComponent,
        ViewPatientHistoryComponent,
        DoctorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        // LayoutModule,
        ReactiveFormsModule,
        DoctorRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class DoctorModule { }
