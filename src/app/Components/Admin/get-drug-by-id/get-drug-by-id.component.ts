import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from 'src/app/Services/AdminService/admin.service';
import {NewDrugDto} from "../update-drug/NewDrugDto";
import {DrugTakingMethod} from "../update-drug/drugTakingMethod.enum";


@Component({
  selector: 'app-get-drug-by-id',
  templateUrl: './get-drug-by-id.component.html',
  styleUrls: ['./get-drug-by-id.component.css']
})
export class GetDrugByIdComponent implements OnInit {

  ID: any;
  Drug: any;
  constructor(private myActivate: ActivatedRoute, private myService: AdminService) {
    this.ID = myActivate.snapshot.params["id"]
    this.Drug =  new NewDrugDto("", DrugTakingMethod.Oral);
  }

  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next: (data:any) => {
        console.log(data);
        this.Drug.name = data.name;
        this.Drug.method = data.method;
        this.Drug.treatedIssuesIds = data.treatedIssues;
        this.Drug.conflictedIssuesIds = data.conflictedIssues;
      },
      error: () => {
      }
    });
  }

}
