import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { patientIllnesses } from 'src/app/Models/patientIllnesses/patientIllnesses';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';

@Component({
  selector: 'app-patient-illnesses',
  templateUrl: './patient-illnesses.component.html',
  styleUrls: ['./patient-illnesses.component.css']
})
export class PatientIllnessesComponent {
  constructor(private http: HttpClient) { }
  illnesses:patientIllnesses[]=[]
  getSpecializationName(specialization: number): string {
    return SpecializationMap[specialization] || 'Unknown';
  }

  ngOnInit() {const token = localStorage.getItem('token') || '';
  const headers = { Authorization: 'Bearer ' + token };
  this.http.get<patientIllnesses[]>('http://localhost:5181/api/Patient/GetPatientillnesses', { headers })
    .subscribe((data) => {
      console.log(data);
      this.illnesses = data;
    })
  }

}
