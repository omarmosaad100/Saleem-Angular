import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientDurgs } from 'src/app/Models/patientDrugs/patientDurgs';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";


@Component({
  selector: 'app-Patient-Drugs',
  templateUrl: './Patient-Drugs.component.html',
  styleUrls: ['./Patient-Drugs.component.css'],

})
export class PatientDrugsComponent implements OnInit {
  baseURL :string = this.url.GetURL() + '/Patient';

  drugs:PatientDurgs[]=[]



  constructor(private http: HttpClient, private url:APIUrlConnectionService) {
  }

  ngOnInit() {const token = localStorage.getItem('token') || '';
  const headers = { Authorization: 'Bearer ' + token };
  this.http.get<PatientDurgs[]>( this.baseURL+'/GetPatientDrugs', { headers })
    .subscribe((data) => {
      this.drugs = data;
    })
  }



}
