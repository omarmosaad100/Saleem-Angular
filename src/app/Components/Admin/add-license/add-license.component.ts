import {Component} from '@angular/core';
import {AdminService} from "../../../Services/AdminService/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {

  nationalId: any;

  constructor(private myService: AdminService, private router: Router) {
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
      this.router.navigate(['/AddLicense']);
    });
  }
}
