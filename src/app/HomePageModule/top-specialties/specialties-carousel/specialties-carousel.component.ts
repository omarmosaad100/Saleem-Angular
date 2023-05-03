import { Component, Input, ViewChild , OnInit} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../Services/home.service';
import { HomeLoadingService } from '../../Services/home-loading.service';

@Component({
  selector: 'app-specialties-carousel',
  templateUrl: './specialties-carousel.component.html',
  styleUrls: ['./specialties-carousel.component.css']
})
export class SpecialtiesCarouselComponent implements OnInit {

  data:any = [];
  constructor(private service:HomeService  , private loadingService: HomeLoadingService){

  }

  length  = 0;

  ngOnInit() {
    this.loadingService.loadPages();

    this.service.getSpecialties()
      .subscribe (
        (data:any) => {
            let splittedData = [];
            for (let i = 0; i < data.length; i++) {

              splittedData.push(data.slice(i , i+=4));
              console.log(i , splittedData)

            }
            console.log(splittedData)
            this.data = splittedData
            this.loadingService.unloadPages();
        },
        (error)=>{
          this.loadingService.unloadPages();

        }

      );
  }


	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true }) carousel: NgbCarousel  | undefined;



	togglePaused() {
		if (this.paused) {
			this.carousel?.cycle();
		} else {
			this.carousel?.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}
}
