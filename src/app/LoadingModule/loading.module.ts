import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent],
  exports:[
    LoadingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line

})
export class LoadingModule { }
