import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    LayoutComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  exports:[
    LayoutComponent,
    NavComponent,
    FooterComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
