import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminApiService} from 'src/app/AdminModule/AdminServices/admin-api-calls/admin.api.service';
import {DrugTakingMethod} from '../../Enums/drugTakingMethod.enum';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-get-all-drugs',
  templateUrl: './get-all-drugs.component.html',
  styleUrls: ['./get-all-drugs.component.css'],
})
export class GetAllDrugsComponent implements OnInit {

  drugs: any = [];
  ID: any;
  MethodOfTakingValue:any;
  data:any;
  page = 1;
  currentPage = 1;
	pageSize = 5;

  constructor(private http: HttpClient,
              private myservice: AdminApiService,
              private myactivate: ActivatedRoute,
              private router: Router) {
    this.ID = this.myactivate.snapshot.params["id"]
  }


  ngOnInit(): void {
    this.loadData();
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

  loadData(){
    this.myservice.getAllDrugs().subscribe({
      next: (data:any) => {
        this.data = data;
        this.drugs = data.slice(0,this.pageSize);
        for(let drug of this.drugs){
          drug["method"] = this.getEnumString(drug["method"])
        }

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
      }
    });
  }
  getEnumString(value: DrugTakingMethod): string {
    return DrugTakingMethod[value];
  }

  pageChange() {
    // this.loadData();
    this.drugs =  this.data.slice((this.currentPage-1)*this.pageSize , this.currentPage*this.pageSize)
  }

}


