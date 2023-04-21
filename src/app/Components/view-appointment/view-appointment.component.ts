import { Component } from '@angular/core';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {
  doctorName: string = "Dr. John Smith";
  patientName: string = "Jane Doe";
  currentDate: Date = new Date();
  issues: string = "Fever, headache, and cough";
  suggestedDrugs: string = "Acetaminophen, ibuprofen, and cough syrup";

}
