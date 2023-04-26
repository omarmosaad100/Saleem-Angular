import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientDurgs } from 'src/app/Models/patientDrugs/patientDurgs';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { APIUrlConnectionService } from "../../Services/APIUrlConnection.service";


@Component({
  selector: 'app-Patient-Drugs',
  templateUrl: './Patient-Drugs.component.html',
  styleUrls: ['./Patient-Drugs.component.css'],

})
export class PatientDrugsComponent implements OnInit {
  baseURL :string = this.url.GetURL() + '/Patient';

  drugs:PatientDurgs[]=[]
  page = 1;
	pageSize = 4;
	collectionSize:number = 0;


  constructor(private http: HttpClient, private url:APIUrlConnectionService) { 
    this.refreshCountries();
  }

  ngOnInit() {const token = localStorage.getItem('token') || '';
  const headers = { Authorization: 'Bearer ' + token };
  this.http.get<PatientDurgs[]>( this.baseURL+'/GetPatientDrugs', { headers })
    .subscribe((data) => {
      console.log(data);
      this.drugs = data;
    })
  }


  refreshCountries() {
		this.drugs = this.drugs.map((drug, i) => ({ id: i + 1, ...drug })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}
