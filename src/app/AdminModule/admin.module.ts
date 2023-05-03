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
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {LayoutModule} from "../LayoutModule/layout.module";
import {AdminLayoutModule} from "./admin-layout/admin-layout.module";
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from "@angular/platform-browser";


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
    AdminLayoutComponent,
    AdminLoginComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    AdminLayoutModule,

  ],
  providers: [DatePipe, AdminApiService, {
    provide: 'text/css', useValue: 'text/css'
  }],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AdminModule {
}
