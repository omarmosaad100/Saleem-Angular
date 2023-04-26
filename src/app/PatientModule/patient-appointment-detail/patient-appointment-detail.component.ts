import { Component } from '@angular/core';
import { AddAppointment } from '../../Models/Appointment-Details/AddAppointment';
import { HttpClient } from '@angular/common/http';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";
import { PatientAppointment } from '../../Models/patientAppointment/Patient-Appointment';

@Component({
  selector: 'app-patient-appointment-detail',
  templateUrl: './patient-appointment-detail.component.html',
  styleUrls: ['./patient-appointment-detail.component.css']
})
export class PatientAppointmentDetailComponent {
  baseURL :string = this.url.GetURL() + '/Patient';

  appointment: PatientAppointment = new PatientAppointment; 
  constructor(private http: HttpClient, private url:APIUrlConnectionService) { 
  }
  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const AppID = localStorage.getItem("Appointment ID") || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<PatientAppointment>(this.baseURL+'/GetAppointmentDetails/'+AppID, { headers })
      .subscribe((data) => {
        console.log(data);
        console.log("dddddddd")
        this.appointment = data;
      });
  }
}
