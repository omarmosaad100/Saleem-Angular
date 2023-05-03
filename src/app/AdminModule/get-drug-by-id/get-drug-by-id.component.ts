import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminApiService} from 'src/app/AdminModule/AdminServices/admin-api-calls/admin.api.service';
import {NewDrugDto} from "../../Dtos/NewDrugDto";
import {DrugTakingMethod} from "../../Enums/drugTakingMethod.enum";


@Component({
  selector: 'app-get-drug-by-id',
  templateUrl: './get-drug-by-id.component.html',
  styleUrls: ['./get-drug-by-id.component.css']
})
export class GetDrugByIdComponent implements OnInit {

  ID: any;
  Drug: any;
  constructor(private myActivate: ActivatedRoute, private myService: AdminApiService) {
    this.ID = myActivate.snapshot.params["id"]
    this.Drug =  new NewDrugDto("", DrugTakingMethod.Oral);
  }

  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next: (data:any) => {
        console.log(data);
        this.Drug.name = data.name;
        this.Drug.method = this.getEnumString(data["method"])
        this.Drug.treatedIssuesIds = data.treatedIssues;
        this.Drug.conflictedIssuesIds = data.conflictedIssues;
      },
      error: () => {
      }
    });
  }

  getEnumString(value: DrugTakingMethod): string {
    return DrugTakingMethod[value];
  }

}
