import { Component } from '@angular/core';
import { AppointmentService } from '../Services/AppointmentService/appointment.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {
  issues :string[]=[]
  Comment:String=""
  constructor(private appointmentService:AppointmentService){
    this.issues=this.appointmentService.issuesArr;
    this.Comment=this.appointmentService.comment;
  }
  doctorName: string = "Dr. John Smith";
  patientName: string = "Jane Doe";
  currentDate: Date = new Date();
  //issues: string = "Fever, headache, and cough";

  suggestedDrugs: string = "Acetaminophen, ibuprofen, and cough syrup";

}
