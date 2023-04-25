import { Component } from '@angular/core';
import { AddAppointment } from '../../Models/Appointment-Details/AddAppointment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-appointment-detail',
  templateUrl: './patient-appointment-detail.component.html',
  styleUrls: ['./patient-appointment-detail.component.css']
})
export class PatientAppointmentDetailComponent {
  appointment: AddAppointment = new AddAppointment; 
  constructor(private http: HttpClient) {}
  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const AppID = localStorage.getItem("Appointment ID") || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<AddAppointment>('http://localhost:5181/api/Patient/GetAppointmentDetails/'+AppID, { headers })
      .subscribe((data) => {
        console.log(data);
        this.appointment = data;
      });
  }

    
}
