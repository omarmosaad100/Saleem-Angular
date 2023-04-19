import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminService/admin.service';


@Component({
  selector: 'app-get-drug-by-id',
  templateUrl: './get-drug-by-id.component.html',
  styleUrls: ['./get-drug-by-id.component.css']
})
export class GetDrugByIdComponent implements OnInit{

  ID:any;
  Drug:any;
  constructor(private myActivate:ActivatedRoute , private myService:AdminService){
    this.ID = myActivate.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next:(data)=>{
        this.Drug = data ;
      },
      error:()=>{}
    });
  }

}
