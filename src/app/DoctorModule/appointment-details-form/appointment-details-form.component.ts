import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../Services/AppointmentService/appointment.service';
import { AppointmentDto } from '../Dtos/AppointmentDto';
import { Location } from '@angular/common';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-details-form',
  templateUrl: './appointment-details-form.component.html',
  styleUrls: ['./appointment-details-form.component.css']
})

export class AppointmentDetailsFormComponent {
  @Output() appointmentAdded = new EventEmitter<void>();

  doctorComment= "";
  issues: any;
  did = 2; //get from claim
  nid: any;
  pid: any;
  doctorProfile: any;
  recommendedDrugs: any = [];

  constructor(private router: Router ,private appointmentService: AppointmentService, private Location: Location){}

  ngOnInit(): void {
    this.nid = window.history.state.nid;
    this.getAllIssues();
    this.GetPidByNid();
  }


  getAllIssues(){
    this.appointmentService.getIssues().subscribe((data: any) =>
      {this.issues = data;}
    );
  }

  GetPidByNid(){
    this.appointmentService.GetPidByNid(this.nid).subscribe((data: any) =>
      {this.pid = data;}
    );
  }


  onSubmit() {
    // Filter the selected issues

    console.log(this.doctorComment);


    this.sendData();
  }

  goBack() {
    // this.Location.back();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100);

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/ViewPatientHistory/${this.nid}`]);
    });
  }

  async GetDoctorProfileById() {
    return new Promise<void>((resolve) => {
      this.appointmentService.GetDoctorProfileById(this.did).subscribe((data: any) => {
        this.doctorProfile = data;
        console.log(this.doctorProfile);
        resolve();
      });
    });
  }

  async getDrugRecommendation(issueName: string, pid: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.appointmentService.GetDrugRecommendation(issueName, pid).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async sendData() {
    const selectedIssues = this.issues.filter((issue: any) => issue.selected).map((issue: any) => issue.id);
    const selectedIssuesNames = this.issues.filter((issue: any) => issue.selected).map((issue: any) => issue.name);
    console.log(selectedIssues);

    await this.GetDoctorProfileById();

    const drugRecommendationPromises = selectedIssuesNames.map((issueName: any) =>
    this.getDrugRecommendation(issueName, this.pid)
  );

    try {
      const drugObjects = await Promise.all(drugRecommendationPromises);
      this.recommendedDrugs = drugObjects.map((drug) => drug.id);
      console.log("Recommended drugs:", this.recommendedDrugs);
  } catch (error) {
    console.error("Error fetching drug recommendations:", error);
  }



    //const observables: Observable<any>[] = [];


    // for(var issueName of selectedIssuesNames)
    // {
    //   this.appointmentService.GetDrugRecommendation(issueName, this.pid).subscribe(
    //     (data: any) => {
    //       console.log("hereeee")
    //       console.log(data)
    //       var rd = data;
    //       console.log(rd);
    //       this.recommendedDrugs.push(rd);
    //       console.log(this.recommendedDrugs);

    //     }
    //   );
    // }

    let appDto = new AppointmentDto();

    appDto.comment = this.doctorComment;
    appDto.diagnosedIssues = selectedIssues;
    appDto.Date = new Date();
    appDto.dId = this.did;
    appDto.pId = this.pid;
    appDto.specialization = this.doctorProfile.specialization;
    console.log(this.recommendedDrugs);
    appDto.describedDrugs = this.recommendedDrugs

    console.log(appDto)
    this.appointmentService.AddAppointment(appDto).subscribe(() => {
      this.appointmentAdded.emit();
      this.goBack();
    });

  }
}
