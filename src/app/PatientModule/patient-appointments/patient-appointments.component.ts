import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorVisitCard } from '../../Models/patientDoctorVisitCard/DoctorVisitCard';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';
import { APIUrlConnectionService } from '../../Services/APIUrlConnection.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientAppointment } from '../../Models/patientAppointment/Patient-Appointment';
import { PatientAppointmentDetailComponent } from '../patient-appointment-detail/patient-appointment-detail.component';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})
export class PatientAppointmentsComponent implements OnInit {
  baseURL: string = this.url.GetURL() + '/Patient';
  doctors: DoctorVisitCard[] = [];
  isactive: boolean = true;

  constructor(private http: HttpClient, private url: APIUrlConnectionService, private modalService: NgbModal) {}

  logDoctorId(doctorId: string) {
    //Id for appointment not doctor
    this.isactive = false;
    localStorage.setItem('Appointment ID', doctorId);
    const modalRef = this.modalService.open(PatientAppointmentDetailComponent);

  }

  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }

  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<DoctorVisitCard[]>(this.baseURL + '/GetDataOFVisitedDoctors', { headers }).subscribe((data) => {
      this.doctors = data;
    });
  }
}
