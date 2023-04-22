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
  getDrugById(id:any){
    return this.myClient.get(this.URL+"/GetDrug/"+id);
  }
  AddNewDrug(Drug:any)
  {
    return this.myClient.post(this.URL , Drug);
  }
  UpdateDrugById(id:number , Drug:any)
  {
    return this.myClient.put(this.URL+"/UpdateDrug/"+id , Drug);
  }
  DeleteDrugById(id:any)
  {
    return this.myClient.delete(this.URL+"/DeleteDrug/"+id);
  }
}
