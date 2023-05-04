import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientDurgs } from 'src/app/Models/patientDrugs/patientDurgs';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";
import { PatientLoadingService } from '../Services/patient-loading.service';


@Component({
  selector: 'app-Patient-Drugs',
  templateUrl: './Patient-Drugs.component.html',
  styleUrls: ['./Patient-Drugs.component.css'],

})
export class PatientDrugsComponent implements OnInit {
  baseURL :string = this.url.GetURL() + '/Patient';

  drugs:PatientDurgs[]=[]
  loadedData:any;


  constructor(private http: HttpClient, private url:APIUrlConnectionService , private loadingService:PatientLoadingService) {
  }

  ngOnInit() {
    this.loadingService.loadPages();
    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<PatientDurgs[]>( this.baseURL+'/GetPatientDrugs', { headers })
      .subscribe({
        next:(data) => {
        this.drugs = data;
        this.loadedData = true
        this.loadingService.unloadPages();

        },
        error:(error)=>{
          this.loadedData = false
          this.loadingService.unloadPages();

        }

      }
      )
    }



}
