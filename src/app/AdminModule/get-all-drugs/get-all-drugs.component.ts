import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from 'src/app/AdminModule/AdminService/admin.service';
import {DrugTakingMethod} from '../../Enums/drugTakingMethod.enum';
import {NewDrugDto} from '../../Dtos/NewDrugDto';



@Component({
  selector: 'app-get-all-drugs',
  templateUrl: './get-all-drugs.component.html',
  styleUrls: ['./get-all-drugs.component.css']
})
export class GetAllDrugsComponent implements OnInit {

  drugs: any;
  ID: any;

  MethodOfTakingValue:any;


  constructor(private http: HttpClient,
              private myservice: AdminService,
              private myactivate: ActivatedRoute,
              private router: Router) {
    this.ID = this.myactivate.snapshot.params["id"]
  }


  ngOnInit(): void {
    this.myservice.getAllDrugs().subscribe({
      next: (data:any) => {
        this.drugs = data
        for(let drug of this.drugs){
          drug["method"] = this.getEnumString(drug["method"])
        }
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("Request has completed")
      }
    });
  }


  delete(id: any) {
    //simply remove item from the array of objects drugs when successfully deleted
    this.myservice.DeleteDrugById(id).subscribe({
      error:(error)=>{console.log(error)},
      complete:()=>{
        this.drugs = this.drugs.filter((d: { id: number; }) => d.id !== id);
      }
    });

    //reload the page and fetch the new data
    // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //   this.router.navigate(['/GetAllDrugs']);
    // });

    //doesn't reload new page data
    //this.router.navigate(['/GetAllDrugs']);
  }

  getEnumString(value: DrugTakingMethod): string {
    return DrugTakingMethod[value];
  }


}


