import {v4 as uuidv4} from 'uuid';

import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AdminService} from 'src/app/Services/AdminService/admin.service';
import {Router} from '@angular/router';
import {DrugTakingMethod} from '../update-drug/drugTakingMethod.enum';
import {DrugDto} from './drugDto';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent {
  constructor(private myService: AdminService, private router: Router) {
  }

  ID: any;
  Drug: DrugDto = new DrugDto("", 0);

  AddedDrug = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    method: new FormControl(""),
  });

  AddDrug() {
    console.log(this.AddedDrug.value);
    // this.ID = uuidv4();

    // this.Drug.id=this.ID;
    this.Drug.name = this.AddedDrug.value.name!;
    this.Drug.method = Number(this.AddedDrug.value.method!) as DrugTakingMethod;

    this.myService.AddNewDrug(this.Drug).subscribe({
      next: (data) => {
      },
      error: (error) => {
        alert("Error Happened adding new drug!")
      },
      complete: () => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/GetAllDrugs']);
        });
      }
    });


  }
}


