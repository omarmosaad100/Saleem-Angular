import { Component } from '@angular/core';
import { AddAppointment } from '../../Models/Appointment-Details/AddAppointment';

@Component({
  selector: 'app-patient-appointment-detail',
  templateUrl: './patient-appointment-detail.component.html',
  styleUrls: ['./patient-appointment-detail.component.css']
})
export class PatientAppointmentDetailComponent {
  appointment: AddAppointment = new AddAppointment; 
  
}
