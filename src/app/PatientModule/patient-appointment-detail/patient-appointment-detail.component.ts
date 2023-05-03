import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIUrlConnectionService } from '../../Services/APIUrlConnection.service';
import { PatientAppointment } from '../../Models/patientAppointment/Patient-Appointment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';

@Component({
  selector: 'app-patient-appointment-detail',
  templateUrl: './patient-appointment-detail.component.html',
  styleUrls: ['./patient-appointment-detail.component.css']
})
export class PatientAppointmentDetailComponent {

  baseURL: string = this.url.GetURL() + '/Patient';
  appointment: PatientAppointment = new PatientAppointment();
  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }
  constructor(private http: HttpClient, private url: APIUrlConnectionService, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const AppID = localStorage.getItem('Appointment ID') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<PatientAppointment>(this.baseURL + '/GetAppointmentDetails/' + AppID, { headers }).subscribe((data) => {
      this.appointment = data;
    });
  }
}
