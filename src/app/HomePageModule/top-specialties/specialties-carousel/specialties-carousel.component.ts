import { Component, Input, ViewChild , OnInit} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../Services/home.service';

@Component({
  selector: 'app-specialties-carousel',
  templateUrl: './specialties-carousel.component.html',
  styleUrls: ['./specialties-carousel.component.css']
})
export class SpecialtiesCarouselComponent implements OnInit {
	//data = [1,2,3,4,5].map((n) => `../../../../assets/Images/Login/${n}.jpg`);

  // img:"../../../../assets/Images/Login/login1.jpg",
  data:any = [];
  group1:any = [];
  group2:any = [];
  group3:any = [];
  group4:any = [];


  allSpecialties : any;

  constructor(private service:HomeService ){

  }


  ngOnInit() {

    this.service.getSpecialties()
      .subscribe ( data => {
        this.allSpecialties = data

        this.allSpecialties.forEach((data_:any , index:number) => {
          if(index<4){
            this.group1.push({
              name : data_,
              img : `../../../../assets/Images/HomePage/Specialist/${data_}.PNG`
            });
          }
          else if(index>4 && index < 9 ){
            this.group2.push({
              name : data_,
              img : `../../../../assets/Images/HomePage/Specialist/${data_}.PNG`
            });
          }
          else if(index>9 && index < 14 ){
            this.group3.push({
              name : data_,
              img : `../../../../assets/Images/HomePage/Specialist/${data_}.PNG`
            });
          }
          else{
            this.group4.push({
              name : data_,
              img : `../../../../assets/Images/HomePage/Specialist/${data_}.PNG`
            });
          }

        });
        this.data.push(this.group1 , this.group2 , this.group3);


        console.log(this.data)
      });



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
