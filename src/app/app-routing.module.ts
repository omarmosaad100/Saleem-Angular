import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthContainerComponent} from './Components/Authentication/AuthContainer/AuthContainer.component';
import {ErrorPageComponent} from './LayoutModule/Components/error-page/error-page.component';
import {HomePageComponent} from './HomePageModule/home-page/home-page.component';
import {LayoutComponent} from './LayoutModule/layout.component';
import {AdminLayoutComponent} from "./AdminModule/admin-layout/admin-layout.component";


const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      {path: "", component: HomePageComponent},
    ]
  },
  {
    path: "Doctor"
    , loadChildren: () => import('./DoctorModule/doctor.module')
      .then(m => m.DoctorModule)
  },
  {
    path: "patient"
    , loadChildren: () => import('./PatientModule/patient.module')
      .then(p => p.PatientModule)
  },
  {
    path: "", component: AdminLayoutComponent, children: [
      {
        path: "Admin"
        , loadChildren: () => import('./AdminModule/admin.module')
          .then(a => a.AdminModule)
      }
    ]

  },
  {path: "Home", redirectTo: ""},
  {path: "Login", redirectTo:"Join" },
  {path: "Join", component: AuthContainerComponent },

  // {path: "Register", component: AuthContainerComponent},
  {path: "**", component: ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
