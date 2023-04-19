import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminService/admin.service';

@Component({
  selector: 'app-get-all-drugs',
  templateUrl: './get-all-drugs.component.html',
  styleUrls: ['./get-all-drugs.component.css']
})
export class GetAllDrugsComponent  implements OnInit {

  drugs:any;
  ID:any;

  constructor(private http: HttpClient,
    private myservice:AdminService,
    private myactivate:ActivatedRoute  ,
    private router:Router){
      this.ID = this.myactivate.snapshot.params["id"]
    }


  ngOnInit(): void {
    this.http.get('https://localhost:7016/api/Admin/GetAllDrugs').subscribe({
      next: (data)=>{this.drugs=data},
      error: (error)=>{console.log(error)},
      complete: ()=>{console.log("Request has completed")}
    });
  }


  delete(id:any){
    this.myservice.DeleteDrugById(id).subscribe({});
    this.router.navigate(['/getAllDrugs']);
  }





}


