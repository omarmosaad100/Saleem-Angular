import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../Services/AppointmentService/appointment.service';
import { Specialization } from 'src/app/Enums/Specialization.enum';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  public appointment: any;

  constructor(private Location: Location){}

  getSpecializationDescription(specNum: number): string {
    return Specialization[specNum];
  }

  goBack(){
    this.Location.back();
  }

  ngOnInit(): void {
      this.appointment = window.history.state.appointment;
      console.log(this.appointment)
  }

}
