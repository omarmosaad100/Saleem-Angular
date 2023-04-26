import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthContainerComponent} from './Components/Authentication/AuthContainer/AuthContainer.component';
//import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import {AddDrugComponent} from './AdminModule/add-drug/add-drug.component';
import {DeleteDrugComponent} from './AdminModule/delete-drug/delete-drug.component';
import {GetAllDrugsComponent} from './AdminModule/get-all-drugs/get-all-drugs.component';
import {GetDrugByIdComponent} from './AdminModule/get-drug-by-id/get-drug-by-id.component';
import {UpdateDrugComponent} from './AdminModule/update-drug/update-drug.component';
import {GetAllDoctorsComponent} from './AdminModule/get-all-doctors/get-all-doctors.component';
import {AddLicenseComponent} from './AdminModule/add-license/add-license.component';
import {AddIssueComponent} from './AdminModule/add-issue/add-issue.component';

import {ErrorPageComponent} from './LayoutModule/Components/error-page/error-page.component';
import {HomePageComponent} from './HomePageModule/home-page/home-page.component';
import {LayoutComponent} from './LayoutModule/layout.component';
import {patientappointmentsCompenent} from './PatientModule/patient-appointments/patient-appointments.component';
import {PatientDrugsComponent} from './PatientModule/patient-Drugs/Patient-Drugs.component';
import {PatientIllnessesComponent} from './PatientModule/patient-illnesses/patient-illnesses.component';
import {AdminContainerComponent} from "./AdminModule/AdminContainer/admin-container.component";


const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      {path: "", component: HomePageComponent},
      {
        path: ""
        , loadChildren: () => import('./DoctorModule/doctor.module')
          .then(m => m.DoctorModule)
      }]
  },
  {
    path: "patient"
    , loadChildren: () => import('./PatientModule/patient.module')
      .then(p => p.PatientModule)
  },
  {
    path: "Admin"
    , loadChildren: () => import('./AdminModule/admin.module')
      .then(a => a.AdminModule)
  },
  {path: "Home", redirectTo: ""},
  {path: "Login", component: AuthContainerComponent},
  {path: "Register", component: AuthContainerComponent},
  {path: "**", component: ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
