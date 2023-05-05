import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  adminToken = localStorage.getItem('admin_User');
  token: any;
  headers: any;

  constructor(private readonly myClient: HttpClient) {
    if (this.adminToken) {
      this.token = JSON.parse(this.adminToken)['token'];
      this.headers = {Authorization: 'Bearer ' + this.token};
    }
  }

 // private readonly URL = "https://localhost:7016/api/Admin";
  private readonly URL = "https://youssefehab77.bsite.net/api/Admin";

  getAllDrugs() {
    return this.myClient.get(this.URL + "/GetAllDrugs",
      {headers: this.headers});
  }

  getAllDoctors() {
    return this.myClient.get(this.URL + "/GetAllDoctors", {headers: this.headers});
  }

  getDrugById(id: any) {
    return this.myClient.get(this.URL + "/GetDrug/" + id,
      {headers: this.headers});
  }

  AddNewDrug(Drug: any) {
    return this.myClient.post(this.URL + "/AddDrug", Drug,
      {headers: this.headers});
  }

  UpdateDrugById(id: number, Drug: any) {
    return this.myClient.put(this.URL + "/UpdateDrug/" + id, Drug,
      {headers: this.headers});
  }

  DeleteDrugById(id: any) {
    return this.myClient.delete(this.URL + "/DeleteDrug/" + id,
      {headers: this.headers});
  }

  DeleteDoctorById(id: any) {
    return this.myClient.delete(this.URL + "/RemoveDoctorLicense?id=" + id,
      {headers: this.headers});
  }

  AddNewDoctorLicense(nationalId: any) {
    return this.myClient.post(this.URL + "/AddLicense", nationalId,
      {headers: this.headers});
  }

  getAllIssues() {
    return this.myClient.get(this.URL + "/GetAllIssues",
      {headers: this.headers});
  }

  AddNewIssue(IssueName: string) {
    return this.myClient.post(this.URL + "/AddIssue", {Name: IssueName},
      {headers: this.headers})
  }
}
