import {ChangeDetectorRef, Component} from '@angular/core';
import {HomeLoadingService} from '../Services/home-loading.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  loading: any;

  constructor(private loadingService: HomeLoadingService, private cdRef: ChangeDetectorRef) {
    this.loadingService.loading.subscribe(l => {
      this.loading = l;
      this.cdRef.detectChanges(); // manually trigger change detection
    })

  }

}
