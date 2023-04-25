import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDto } from '../../Dtos/AppointmentDto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  public getAppointmentsByNid(nid: any): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/GetAppointmentsByNid?nid=${nid}`;
    return this.http.get(url);
  }

  public getIssues(): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/GetAllIssues`;
    return this.http.get(url);
  }

  public GetIssuesByPid(pid: string): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/GetIssuesByPid?pid=${pid}`;
    return this.http.get(url);
  }

  public AddAppointment(appointmentDto: AppointmentDto): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/AddAppointment`;
    return this.http.post(url, appointmentDto);
  }

  public GetDoctorProfileById(did: any): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/GetDoctorProfileById?did=${did}`;
    return this.http.get(url);
  }

  public GetPidByNid(nid: any): Observable<any> {
    const url = `https://localhost:7016/api/Doctor/GetPidByNid?nid=${nid}`;
    return this.http.get(url);
  }

  public DeleteIssueByPidAndIssueName(pid: any, issueName: any){
    const url = `https://localhost:7016/api/Doctor/DeleteIssueByPidAndIssueName?pid=${pid}&name=${issueName}`;
    return this.http.delete(url);
  }

  public GetDrugRecommendation(issueName: any, pid: any): Observable<any>{
    const url = `https://localhost:7016/api/Doctor/GetDrugRecommendation?issueName=${issueName}&pid=${pid}`
    return this.http.get(url);
  }

}
