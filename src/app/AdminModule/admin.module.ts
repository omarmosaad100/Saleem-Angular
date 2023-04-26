import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {AdminContainerComponent} from "./AdminContainer/admin-container.component";
import {GetAllDrugsComponent} from "./get-all-drugs/get-all-drugs.component";
import {GetDrugByIdComponent} from "./get-drug-by-id/get-drug-by-id.component";
import {UpdateDrugComponent} from "./update-drug/update-drug.component";
import {GetAllDoctorsComponent} from "./get-all-doctors/get-all-doctors.component";
import {AddLicenseComponent} from "./add-license/add-license.component";
import {AddIssueComponent} from "./add-issue/add-issue.component";
import {DeleteDrugComponent} from "./delete-drug/delete-drug.component";
import {AddDrugComponent} from "./add-drug/add-drug.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminApiService} from "./AdminServices/admin-api-calls/admin.api.service";
import {PatientRoutingModule} from "../PatientModule/patient-routing.module";
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DeleteDrugComponent,
    AddDrugComponent,
    AdminContainerComponent,
    GetAllDrugsComponent,
    GetDrugByIdComponent,
    UpdateDrugComponent,
    GetAllDoctorsComponent,
    AddLicenseComponent,
    AddIssueComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe, AdminApiService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminModule {
}
