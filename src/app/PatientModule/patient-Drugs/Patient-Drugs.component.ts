import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientDurgs } from 'src/app/Models/patientDrugs/patientDurgs';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Patient-Drugs',
  templateUrl: './Patient-Drugs.component.html',
  styleUrls: ['./Patient-Drugs.component.css'],

})
export class PatientDrugsComponent implements OnInit {


  drugs:PatientDurgs[]=[]
  page = 1;
	pageSize = 4;
	collectionSize:number = 0;

  constructor(private http: HttpClient) { 
    this.refreshCountries();
  }

  ngOnInit() {
    const token = localStorage.getItem('token') || '';
    const headers = { Authorization: 'Bearer ' + token };
    this.http.get<PatientDurgs[]>('http://localhost:5181/api/Patient/GetPatientDrugs', { headers })
      .subscribe((data) => {
        this.drugs = data;
        this.collectionSize = this.drugs.length
      })
  }
  refreshCountries() {
		this.drugs = this.drugs.map((drug, i) => ({ id: i + 1, ...drug })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}
