import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminContainerComponent} from "./AdminContainer/admin-container.component";
import {AddDrugComponent} from "./add-drug/add-drug.component";
import {AddLicenseComponent} from "./add-license/add-license.component";
import {AddIssueComponent} from "./add-issue/add-issue.component";
import {GetAllDrugsComponent} from "./get-all-drugs/get-all-drugs.component";
import {GetAllDoctorsComponent} from "./get-all-doctors/get-all-doctors.component";
import {GetDrugByIdComponent} from "./get-drug-by-id/get-drug-by-id.component";
import {UpdateDrugComponent} from "./update-drug/update-drug.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import {AdminAuthGuard} from "./AdminGuard/admin-auth.guard";

const routes: Routes = [
  {path: "Login", component: AdminLoginComponent},
  {
    path: "",component: AdminContainerComponent , canActivate: [AdminAuthGuard],
    children: [
      {path: "AddDrug", component: AddDrugComponent},
      {path: "AddLicense", component: AddLicenseComponent},
      {path: "AddIssue", component: AddIssueComponent},
      {path: "DeleteDrug/:id", component: AddLicenseComponent},
      {path: "GetAllDrugs", component: GetAllDrugsComponent},
      {path: "GetAllDoctors", component: GetAllDoctorsComponent},
      {path: "GetDrug/:id", component: GetDrugByIdComponent},
      {path: "UpdateDrug/:id", component: UpdateDrugComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
