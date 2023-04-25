import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientDurgs } from 'src/app/Models/patientDrugs/patientDurgs';



@Component({
  selector: 'app-Patient-Drugs',
  templateUrl: './Patient-Drugs.component.html',
  styleUrls: ['./Patient-Drugs.component.css']
})
export class PatientDrugsComponent implements OnInit {


  drugs:PatientDurgs[]=[]
  constructor(private http: HttpClient) { }

  ngOnInit() {const token = localStorage.getItem('token') || '';
  const headers = { Authorization: 'Bearer ' + token };
  this.http.get<PatientDurgs[]>('http://localhost:5181/api/Patient/GetPatientDrugs', { headers })
    .subscribe((data) => {
      console.log(data);
      this.drugs = data;
    })
  }

}
