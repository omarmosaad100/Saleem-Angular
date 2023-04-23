import {v4 as uuidv4} from 'uuid';

import {Component, OnInit} from '@angular/core';
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
export class AddDrugComponent implements OnInit {

  Drug: DrugDto = new DrugDto("", 0);
  Issues: any;
  treatedIssuesChecked: any[] = [];
  conflictedIssuesChecked: any[] = [] ;

  constructor(private myService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.myService.getAllIssues().subscribe({
      next: (data) => {
        this.Issues = data
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
  onConflictedChecked(event: any, id: any) {
    const checkbox = document.getElementById("t-" + id) as HTMLInputElement;
    if (event.target.checked) {
      this.conflictedIssuesChecked.push(id);
      checkbox.disabled = true;
    } else {
      const index = this.conflictedIssuesChecked.indexOf(id);
      if (index >= 0) {
        this.conflictedIssuesChecked.splice(index, 1);
        checkbox.disabled = false;
      }
    }
  }

  onTreatedCheck(event: any, id: any) {
    const checkbox = document.getElementById("c-" + id) as HTMLInputElement;
    if (event.target.checked) {
      this.treatedIssuesChecked.push(id);
      checkbox.disabled = true;
    } else {
      const index = this.treatedIssuesChecked.indexOf(id);
      if (index >= 0) {
        this.treatedIssuesChecked.splice(index, 1);
        checkbox.disabled = false;
      }
    }
  }

  AddDrug() {
    this.Drug.method = Number(this.Drug.method!) as DrugTakingMethod;
    this.Drug.conflictedIssuesIds = this.conflictedIssuesChecked;
    this.Drug.treatedIssuesIds = this.treatedIssuesChecked;
    console.log(this.Drug);

    this.myService.AddNewDrug(this.Drug).subscribe({
      next: (data) => {
      },
      error: (error) => {
        alert("Error Happened adding new drug!");
        console.log(error.message);
      },
      complete: () => {
        alert("Drug Added Successfully!");
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/GetAllDrugs']);
        });
      }
    });
  }
}


