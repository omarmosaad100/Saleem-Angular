import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';

import { ErrorPageComponent } from './LayoutModule/Components/error-page/error-page.component';
import { HomePageComponent } from './HomePageModule/home-page/home-page.component';
import { LayoutComponent } from './LayoutModule/layout.component';



const routes: Routes = [
  {path:"" , component : LayoutComponent,children:[
    {path:"" , component:HomePageComponent },
    {path:""
      ,loadChildren: () => import('./DoctorModule/doctor.module')
      .then(m => m.DoctorModule)
    },
    {path:"patient"
      ,loadChildren: () => import('./PatientModule/patient.module')
      .then(p => p.PatientModule)
    },

  ]},


  {path:"Home" , redirectTo:""},


  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},

  {path:"**",component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
