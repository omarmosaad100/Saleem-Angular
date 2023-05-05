import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';
import { GenderEnum } from 'src/app/Enums/GenderEnum.enum';
import { PatientLoadingService } from '../../Services/patient-loading.service';

@Component({
  selector: 'patient-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data:any
  loading:boolean  = true;

  @Output() dataIsLoaded = new EventEmitter();
  constructor(private service:ProfileService , private loadingService:PatientLoadingService) { }

  ngOnInit() {
    this.loadingService.loadPages();
    this.service.getPatientData().subscribe({
      next : (data)=>{
        this.data = data
        data.gender = GenderEnum[data.gender]
        this.loading = true;
        this.dataIsLoaded.emit(true)
        this.loadingService.unloadPages();

      },
      error: (error)=>{
        this.dataIsLoaded.emit(false);
        this.loading = false;

        this.loadingService.unloadPages();

      }
    }
    )
  }

}
