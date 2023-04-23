import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from 'src/app/Services/AdminService/admin.service';
import {NewDrugDto} from './NewDrugDto';
import {DrugTakingMethod} from './drugTakingMethod.enum';


@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css']
})
export class UpdateDrugComponent implements OnInit {


  ID: any;
  Drug: NewDrugDto = new NewDrugDto("", 0);

  editDrug = new FormGroup({
    name: new FormControl(""),
    method: new FormControl(""),
  })

  constructor(private myActivate: ActivatedRoute, private myService: AdminService, private router: Router) {
    this.ID = myActivate.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next: (data: any) => {
        this.Drug = data;
        this.editDrug = new FormGroup({
          name: new FormControl(data["name"]),
          method: new FormControl(data["method"]),
        });
      },
      error: () => {
      }
    });
  }

  UpdateDrug() {
    console.log(this.editDrug.value);
    this.Drug.name = this.editDrug.value.name!;
    this.Drug.method = Number(this.editDrug.value.method!) as DrugTakingMethod;
    this.myService.UpdateDrugById(this.ID, this.Drug).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        alert("Couldn't Update This drug, make sure the data is right!")
      },
      complete: () => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['/GetAllDrugs']);
        });
      }
    })

  }
}

