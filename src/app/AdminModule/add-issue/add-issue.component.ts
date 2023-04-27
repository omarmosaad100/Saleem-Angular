import {Component} from '@angular/core';
import {AdminService} from "../AdminService/admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  IssueName: string = "";

  constructor(private myService: AdminService, private router: Router) {
  }

  addIssue() {
    this.myService.AddNewIssue(this.IssueName).subscribe({
      next: (data) => {
      },
      error: (error) => {
        alert(error.message);
        //alert("Make Sure that the Data is correct!")
      },
      complete: () => {
        alert("Issue Added Successfully!")
      }
    });
  }
}
