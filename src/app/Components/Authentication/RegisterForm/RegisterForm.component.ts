import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-RegisterForm',
  templateUrl: './RegisterForm.component.html',
  styleUrls: ['./RegisterForm.component.css']
})
export class RegisterFormComponent implements OnInit {


  constructor(private renderer:Renderer2) {

   }

  ngOnInit() {
  }

}
