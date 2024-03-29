import {Component} from '@angular/core';
import {AdminApiService} from "../AdminServices/admin-api-calls/admin.api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {

  nationalId: any;

  constructor(private myService: AdminApiService, private router: Router) {
  }

  addLicense() {
    this.myService.AddNewDoctorLicense({NationalId: this.nationalId}).subscribe({
      next: (data) => {
      },
      error: (error) => {
        //alert(error.message)
        alert("Make Sure that the national Id is correct!")
      },
      complete: () => {
        alert("License Added Successfully!")
      }
    });

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/Admin/AddLicense']);
    });
  }
}
