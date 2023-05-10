import { Component ,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { patientIllnesses } from 'src/app/Models/patientIllnesses/patientIllnesses';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";

import { DatePipe } from '@angular/common';
import { PatientLoadingService } from '../Services/patient-loading.service';

@Component({
  selector: 'patient-illnesses',
  templateUrl: './patient-illnesses.component.html',
  styleUrls: ['./patient-illnesses.component.css'],
})
export class PatientIllnessesComponent {

  baseURL :string = this.url.GetURL() + '/Patient';
  loading:any;

  constructor(private http: HttpClient, private url:APIUrlConnectionService , private loadingService:PatientLoadingService) {

   }
  illnesses:patientIllnesses[]=[];
  // getSpecializationName(specialization: number): string {
  //   return SpecializationMap[specialization] || 'Unknown';
  // }

  ngOnInit() {
    this.loadingService.loadPages();

    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<patientIllnesses[]>(this.baseURL+'/GetPatientillnesses', { headers })
    // this.http.get<patientIllnesses[]>( "https://localhost:7016/api/Patient/GetPatientillnesses", { headers })
      .subscribe({
        next:(data) => {
        this.illnesses = data;
        this.loading  = true;
        this.loadingService.unloadPages();
        },
        error:(error)=>{
          this.loading  = false;
          this.loadingService.unloadPages();

        }
    })
    }

}
