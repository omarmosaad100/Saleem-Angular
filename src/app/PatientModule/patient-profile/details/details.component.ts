import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';

@Component({
  selector: 'patient-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data:any
  loading:boolean  = true;

  constructor(private service:ProfileService) { }

  ngOnInit() {
    this.service.getPatientData().subscribe(
      (data)=>{
        this.data = data
        data.gender = GenderEnum[data.gender]
        this.loading = false;

      }
    )
  }

}
