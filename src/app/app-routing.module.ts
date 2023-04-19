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

const routes: Routes = [
  {path:"" , component : HomePageComponent},
  {path:"Home" , redirectTo:""},

  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},

  //admin components
  {path:"addDrug" , component:AddDrugComponent},
  {path:"deleteDrug/:id" , component:DeleteDrugComponent},
  {path:"getAllDrugs" , component:GetAllDrugsComponent},
  {path:"getDrug/:id" , component:GetDrugByIdComponent},
  {path:"updateDrug/:id" , component:UpdateDrugComponent},

  {path:"**",component : ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
