import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }
  issuesArr: string[] = [];
  comment:string=""
}
