import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-patient-history',
  templateUrl: './view-patient-history.component.html',
  styleUrls: ['./view-patient-history.component.css']
})
export class ViewPatientHistoryComponent {

  public appointments:any;
  public nid: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nid = this.route.snapshot.paramMap.get('nid');
    this.getAppointments();
  }

  getAppointments() {
    const url = `https://localhost:7016/api/Doctor/GetAppointmentsByNid?nid=${this.nid}`;
    this.http.get(url).subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments)
    });
  }

}
