import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesComponent } from './features/features.component';
import { TopSpecialtiesComponent } from './top-specialties/top-specialties.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { SpecialtiesCarouselComponent } from './top-specialties/specialties-carousel/specialties-carousel.component';
import { HomeService } from './Services/home.service';



@NgModule({
  declarations: [
    CarouselComponent,
    HomePageComponent,
    FeaturesComponent,
    TopSpecialtiesComponent,
    SpecialtiesCarouselComponent,


  ],
  exports:[
    HomePageComponent
  ],

  imports: [
    CommonModule,
    NgbCarouselModule,
    AppRoutingModule
  ]
})
export class HomePageModule {
  constructor(private appModule:AppModule){

  }
}
