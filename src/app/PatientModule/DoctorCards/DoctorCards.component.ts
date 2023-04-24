import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorVisitCard } from '../..//Models/DoctorVisitCard/DoctorVisitCard';
import { Specialization, SpecializationMap } from '../../Enums/SpecializationEnum.enum';


@Component({
  selector: 'app-doctor-cards',
  templateUrl: './DoctorCards.component.html',
  styleUrls: ['./DoctorCards.component.css']
})


export class DoctorCardsComponent implements OnInit {
  doctors: DoctorVisitCard[] =[];

  

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