import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialization } from 'src/app/Enums/Specialization.enum';
import { AppointmentService } from '../Services/AppointmentService/appointment.service'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-view-patient-history',
  templateUrl: './view-patient-history.component.html',
  styleUrls: ['./view-patient-history.component.css']
})
export class ViewPatientHistoryComponent {

  public appointments:any;
  public nid: any;
  public pid: any;
  public showFilter: boolean = false;
  public filterValue: string[] = [];
  public filteredAppointments: any;
  public filterForm: FormGroup;
  public selectedSpecialization: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private myService: AppointmentService, private route: ActivatedRoute, private router: Router, private Location: Location) {
    this.filterForm = this.fb.group({});
  }

  async ngOnInit(): Promise<void> {
    this.nid = this.route.snapshot.paramMap.get('nid');
    await this.getAppointments();
    this.filteredAppointments = this.appointments;

    for (const key in Specialization) {
      if (!isNaN(Number(key))) {
        this.filterForm.addControl(key, this.fb.control(false));
      }
    }
  }

  async getAppointments() {
    try {
      const data: any = await this.myService.getAppointmentsByNid(this.nid).pipe(map(res => res)).toPromise();
      this.appointments = data;
      this.filteredAppointments = data;
      console.log(this.appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  getSpecializationDescription(specNum: number): string {
    return Specialization[specNum];
  }

  navigateToDetails(appointment: any)
  {
    this.router.navigate(['/viewAppointment'],  { state: { appointment } });
  }

  navigateToAdd()
  {
    this.router.navigate(["/AddAppointment"], { state: { nid: this.nid }})
  }

  navigateToIssues()
  {
    this.pid = this.myService.GetPidByNid(this.nid).subscribe((data: any) => {
      const pid = data;
      this.router.navigate(['/ViewIssues', pid]);
    });
  }

  goBack(){
    this.Location.back();
  }

  filter(): void {
    if (this.selectedSpecialization === '') {
      this.filteredAppointments = this.appointments;
    } else {
      this.filteredAppointments = this.appointments.filter((appointment: any) => {
        return this.selectedSpecialization === String(appointment.specialization);
      });
    }
  }

keys = Object.keys;
public Specialization = Specialization;
}
