import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { AddDrugComponent } from './Components/Admin/add-drug/add-drug.component';
import { DeleteDrugComponent } from './Components/Admin/delete-drug/delete-drug.component';
import { GetAllDrugsComponent } from './Components/Admin/get-all-drugs/get-all-drugs.component';
import { GetDrugByIdComponent } from './Components/Admin/get-drug-by-id/get-drug-by-id.component';
import { UpdateDrugComponent } from './Components/Admin/update-drug/update-drug.component';
import { GetAllDoctorsComponent } from './Components/Admin/get-all-doctors/get-all-doctors.component';
import { AddLicenseComponent } from './Components/Admin/add-license/add-license.component';
import { AddIssueComponent } from './Components/Admin/add-issue/add-issue.component';

const routes: Routes = [
  {path:"" , component : HomePageComponent},
  {path:"Home" , redirectTo:""},

  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},

  //admin components
  {path:"AddDrug" , component:AddDrugComponent},
  {path:"AddLicense" , component:AddLicenseComponent},
  {path:"AddIssue" , component:AddIssueComponent},
  {path:"DeleteDrug/:id" , component:AddLicenseComponent},
  {path:"GetAllDrugs" , component:GetAllDrugsComponent},
  {path:"GetAllDoctors" , component:GetAllDoctorsComponent},
  {path:"GetDrug/:id" , component:GetDrugByIdComponent},
  {path:"UpdateDrug/:id" , component:UpdateDrugComponent},

  {path:"**",component : ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
