import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly myClient:HttpClient) {}

  private readonly URL = "https://localhost:7016/api/Admin";

  getAllDrugs(){
    return this.myClient.get(this.URL+"/GetAllDrugs");
  }
  getAllDoctors(){
    return this.myClient.get(this.URL+"/GetAllDoctors");
  }
  getDrugById(id:any){
    return this.myClient.get(this.URL+"/GetDrug/"+id);
  }
  AddNewDrug(Drug:any)
  {
    return this.myClient.post(this.URL+"/AddDrug" , Drug);
  }
  UpdateDrugById(id:number , Drug:any)
  {
    return this.myClient.put(this.URL+"/UpdateDrug/"+id , Drug);
  }
  DeleteDrugById(id:any)
  {
    return this.myClient.delete(this.URL+"/DeleteDrug/"+id);
  }
  DeleteDoctorById(id:any){
    return this.myClient.delete(this.URL+"/RemoveDoctorLicense?id="+id);
  }

  AddNewDoctorLicense(nationalId:any){
    return this.myClient.post(this.URL+"/AddLicense", nationalId);
  }

  getAllIssues(){
    return this.myClient.get(this.URL+"/GetAllIssues");
  }
}
