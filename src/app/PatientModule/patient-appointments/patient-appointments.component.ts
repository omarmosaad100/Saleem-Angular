import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorVisitCard } from '../../Models/patientDoctorVisitCard/DoctorVisitCard';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';


@Component({
  selector: 'app-patientappointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})


export class patientappointmentsCompenent implements OnInit {
  doctors: DoctorVisitCard[] =[];

  logDoctorId(doctorId: string) {
    //Id for appointment not doctor
    console.log("Appointment ID: ", doctorId);
  }

  constructor(private http: HttpClient) {

  }
  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }

  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<DoctorVisitCard[]>('http://localhost:5181/api/Patient/GetDataOFVisitedDoctors', { headers })
      .subscribe((data) => {
        console.log(data);
        this.doctors = data;
      });
  }


}
