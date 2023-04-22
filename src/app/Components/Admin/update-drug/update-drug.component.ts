import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminService/admin.service';

@Component({
  selector: 'app-update-drug',
  templateUrl: './update-drug.component.html',
  styleUrls: ['./update-drug.component.css']
})
export class UpdateDrugComponent  implements OnInit {


  ID:any;
  Drug:any;

  editDrug = new FormGroup({
    name:new FormControl(""),
    method:new FormControl(""),
  })

  constructor(private myActivate:ActivatedRoute , private myService:AdminService , private router:Router){
    this.ID = myActivate.snapshot.params["id"]
  }
  ngOnInit(): void {
    this.myService.getDrugById(this.ID).subscribe({
      next:(data:any)=>{
        this.Drug = data ;
        this.editDrug = new FormGroup({
          name:new FormControl(data["name"]),
          method:new FormControl(data["method"]),
        });
      },
      error:()=>{}
    });
  }

  UpdateDrug(){
    console.log(this.editDrug.value);

    this.myService.UpdateDrugById(this.ID,this.editDrug.value).subscribe({
      next:(data)=>{console.log(data)},
      error:(error)=>{console.log(error)}
    })
    this.router.navigate(['/GetAllDrugs']);
  }
}
// enum DrugTakingMethod {
//   oral,
//   injection,
// }
