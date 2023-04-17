import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Client';

  users:any; //not safe we have to make data type for it

  //earliest thing happen in the class
  constructor(private http: HttpClient){}

  //after constructor
  ngOnInit(): void {
    this.http.get('https://localhost:7016/api/Users').subscribe({
      next: (data)=>{this.users=data},
      error: (error)=>{console.log(error)},
      complete: ()=>{console.log("Request has completed")}
    });
  }
}
