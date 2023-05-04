import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-doctor-registers-patient',
  templateUrl: './doctor-registers-patient.component.html',
  styleUrls: ['./doctor-registers-patient.component.css']
})
export class DoctorRegistersPatientComponent {
  constructor(private router: Router ){}
  nationalIdPattern = /^[0-9]{14}$/;
  nationalId=""
  submitted = false;
  validationMessage = "";

  isNationalIdValid(): boolean {
    return this.nationalIdPattern.test(this.nationalId);
  }


  submitForm() {
    this.submitted = true;
    if (this.isNationalIdValid()) {
      this.checkNid().catch(() => {
        this.validationMessage = 'National Id does not have a corresponding account!';
      })

      this.router.navigate(['/Doctor/ViewPatientHistory', this.nationalId])
    }
    else {
      this.validationMessage = 'Invalid National ID. Please check your input.';
  }
}

checkNid(): Promise<boolean>{
  //to be implemented
  return new Promise((resolve, reject) => {})
}

}
