import { Component, OnInit } from '@angular/core';;
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../Services/AppointmentService/appointment.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent {
  issues: any;
  pid: any;
  constructor (private appointmentService: AppointmentService, private route: ActivatedRoute, private Location: Location){
    this.pid = this.route.snapshot.paramMap.get('pid');
    appointmentService.GetIssuesByPid(this.pid).subscribe((data => {
      this.issues = data;
      console.log(this.issues);
    }))
  }

  remove(issueName: any)
  {
    this.appointmentService.DeleteIssueByPidAndIssueName(this.pid, issueName).subscribe();
    this.issues = this.issues.filter((issue: any) => issue.name !== issueName);
  }

  goBack(){
    this.Location.back();
  }
}
