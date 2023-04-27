import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminApiService} from 'src/app/AdminModule/AdminServices/admin-api-calls/admin.api.service';

@Component({
  selector: 'app-get-all-doctors',
  templateUrl: './get-all-doctors.component.html',
  styleUrls: ['./get-all-doctors.component.css']
})
export class GetAllDoctorsComponent implements OnInit {

  doctors: any;
  ID: any;

  constructor(private http: HttpClient,
              private myservice: AdminApiService,
              private myactivate: ActivatedRoute,
              private router: Router) {
    this.ID = this.myactivate.snapshot.params["id"]
  }

  ngOnInit(): void {
    this.myservice.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
      }
    });
  }

  delete(id: any) {
    this.myservice.DeleteDoctorById(id).subscribe({
      error: () => {
        alert("Couldn't Remove License at the moment!")
      },
      complete: () => {
        this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate(['/Admin/GetAllDoctors']);
          })
      }
    });
  }
}
