import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientComponent {

  dataLoaded:any;

  checkLoadedHandler(state:boolean){
    console.log(state)
    this.dataLoaded = state;
  }


}
