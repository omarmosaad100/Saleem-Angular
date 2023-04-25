import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../Services/AppointmentService/appointment.service';

@Component({
  selector: 'app-appointment-details-form',
  templateUrl: './appointment-details-form.component.html',
  styleUrls: ['./appointment-details-form.component.css']
})
export class AppointmentDetailsFormComponent {
  doctorComment= "";


  constructor(private router: Router ,private appointmentService :AppointmentService) { }

  issues = [
    { name: 'Fever', selected: false },
    { name: 'Headache', selected: false },
    { name: 'Cough', selected: false },
    { name: 'Sore throat', selected: false },
    { name: 'Stomach ache', selected: false }
  ];


  onSubmit() {
    // Filter the selected issues
    const selectedIssues = this.issues.filter(issue => issue.selected).map(issue => issue.name);

    // Send the selected issues and doctor's comment to the server or perform any other necessary action
    console.log(selectedIssues);
    console.log("Comment :-  "+this.doctorComment);
    this.sendData(selectedIssues ,this.doctorComment);
    this.router.navigate(['/viewAppointment']);

  }
  sendData(arr:string[] ,cmnt:string) {
    this.appointmentService.issuesArr= arr;
    this.appointmentService.comment=cmnt;
  }
}
