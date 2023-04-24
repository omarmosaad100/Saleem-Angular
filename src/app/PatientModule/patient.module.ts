import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient-profile/patient-profile.component';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class PatientModule { }
