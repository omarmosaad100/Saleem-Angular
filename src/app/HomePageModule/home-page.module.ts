import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FeaturesComponent } from './features/features.component';
import { TopSpecialtiesComponent } from './top-specialties/top-specialties.component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { SpecialtiesCarouselComponent } from './top-specialties/specialties-carousel/specialties-carousel.component';
import { LoadingModule } from '../LoadingModule/loading.module';
// import { LoadingModule } from '../LoadingModule/loading.module';



@NgModule({
  declarations: [
    CarouselComponent,
    HomePageComponent,
    FeaturesComponent,
    TopSpecialtiesComponent,
    SpecialtiesCarouselComponent,
    // LoadingComponent

  ],
  exports:[
    HomePageComponent,
  ],

  imports: [
    CommonModule,
    NgbCarouselModule,
    AppRoutingModule,
    LoadingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class HomePageModule {
  constructor(private appModule:AppModule){

  }
}
