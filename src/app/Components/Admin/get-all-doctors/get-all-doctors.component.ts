import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/AdminService/admin.service';

@Component({
  selector: 'app-get-all-doctors',
  templateUrl: './get-all-doctors.component.html',
  styleUrls: ['./get-all-doctors.component.css']
})
export class GetAllDoctorsComponent implements OnInit {

  doctors:any;
  ID:any;

  constructor(private http: HttpClient,
    private myservice:AdminService,
    private myactivate:ActivatedRoute  ,
    private router:Router){
      this.ID = this.myactivate.snapshot.params["id"]
    }

  ngOnInit(): void {
    this.myservice.getAllDoctors().subscribe({
      next: (data)=>{this.doctors=data},
      error: (error)=>{console.log(error)},
      complete: ()=>{console.log(this.doctors)}
    });
  }
  delete(id:any){
    this.myservice.DeleteDoctorById(id).subscribe({});
    this.router.navigate(['/GetAllDoctors']);
  }


}
