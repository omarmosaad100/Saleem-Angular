import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-registers-patient',
  templateUrl: './doctor-registers-patient.component.html',
  styleUrls: ['./doctor-registers-patient.component.css']
})
export class DoctorRegistersPatientComponent {
  constructor(private router: Router ){}
  nationalIdPattern = /^[0-9]{14}$/;
  nationalId=""
  isNationalIdValid(): boolean {
    return this.nationalIdPattern.test(this.nationalId);
  }
  goToHistory(){
    if(this.isNationalIdValid()){
      this.router.navigate(['/ViewPatientHistory']);
    }
  }
}
