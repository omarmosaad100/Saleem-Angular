import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorVisitCard } from '../../Models/patientDoctorVisitCard/DoctorVisitCard';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";


@Component({
  selector: 'app-patientappointments',
  templateUrl: './patient-appointments.component.html',
  styleUrls: ['./patient-appointments.component.css']
})


export class patientappointmentsCompenent implements OnInit {
  baseURL :string = this.url.GetURL() + '/Patient';

  doctors: DoctorVisitCard[] =[];
isactive: boolean =true;

  logDoctorId(doctorId: string) {
    //Id for appointment not doctor
    console.log("Appointment ID: ", doctorId);
    this.isactive = false;
    localStorage.setItem("Appointment ID",doctorId)
  }

  constructor(private http: HttpClient, private url:APIUrlConnectionService) { 

  }
  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }

  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<DoctorVisitCard[]>(this.baseURL+'/GetDataOFVisitedDoctors', { headers })
      .subscribe((data) => {
        console.log(data);
        this.doctors = data;
      });
  }


}
