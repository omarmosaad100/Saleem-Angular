import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminNavComponent} from "./Components/nav/admin-nav.component";
import {AdminFooterComponent} from "./Components/footer/admin-footer.component";
import {AdminErrorPageComponent} from "./Components/error-page/admin-error-page.component";
import {AdminLayoutComponent} from "./admin-layout.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminNavComponent,
    AdminFooterComponent,
    AdminErrorPageComponent,
    // AdminLayoutComponent
  ],
  exports:[
    AdminNavComponent,
    AdminFooterComponent,
    AdminErrorPageComponent,
    // AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminLayoutModule { }
