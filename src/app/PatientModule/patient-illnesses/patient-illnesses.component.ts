import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { patientIllnesses } from 'src/app/Models/patientIllnesses/patientIllnesses';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";

import { DatePipe } from '@angular/common';

@Component({
  selector: 'patient-illnesses',
  templateUrl: './patient-illnesses.component.html',
  styleUrls: ['./patient-illnesses.component.css'],
})
export class PatientIllnessesComponent {

  baseURL :string = this.url.GetURL() + '/Patient';

  constructor(private http: HttpClient, private url:APIUrlConnectionService) {

   }
  illnesses:patientIllnesses[]=[]
  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }

  ngOnInit() {const token = localStorage.getItem('token') || '';
  const headers = { Authorization: 'Bearer ' + token };
  this.http.get<patientIllnesses[]>(this.baseURL+'/GetPatientillnesses', { headers })
    .subscribe((data) => {
      console.log(data);
      this.illnesses = data;
    })
  }

}
