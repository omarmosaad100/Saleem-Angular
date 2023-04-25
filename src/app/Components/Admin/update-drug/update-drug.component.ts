import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from 'src/app/Services/AdminService/admin.service';
import {NewDrugDto} from '../../../Dtos/NewDrugDto';
import {DrugTakingMethod} from '../../../Enums/drugTakingMethod.enum';


@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css']
})
export class UpdateDrugComponent implements OnInit {


  ID: any;
  MethodOfTakingValue:any;
  Drug: NewDrugDto = new NewDrugDto("", 0);

  editDrug = new FormGroup({
    name: new FormControl(""),
    // method: new FormControl(""),
    methodTaking: new FormControl("")
  })

  constructor(private myActivate: ActivatedRoute, private myService: AdminService, private router: Router) {
    this.ID = myActivate.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next: (data: any) => {
        this.Drug = data;
        this.MethodOfTakingValue = this.getEnumString(data["method"]);
        console.log(DrugTakingMethod[this.MethodOfTakingValue]);

        this.editDrug = new FormGroup({
          name: new FormControl(this.Drug.name),
          // method: new FormControl(this.MethodOfTakingValue),
          methodTaking: new FormControl(this.MethodOfTakingValue)
        });
      },
      error: () => {
      }
    });
  }

  UpdateDrug() {
    console.log(this.editDrug.value);
    this.Drug.name = this.editDrug.value.name!;
    let methodtest = this.editDrug.value.methodTaking!
    this.Drug.method = DrugTakingMethod[methodtest as keyof typeof DrugTakingMethod];
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

  getEnumString(value: DrugTakingMethod): string {
    return DrugTakingMethod[value];
  }
  get enumValues():string[] {
    return Object.keys(DrugTakingMethod)
    .filter(key => isNaN(Number(key))) // filter out numeric values
  }
  // get methodNumber():any{
  //   return Object.keys(DrugTakingMethod)
  //   .filter(key => isNaN(Number(key))) // filter out numeric values
  // }
}

