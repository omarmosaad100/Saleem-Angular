import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminNavComponent} from "./Components/nav/admin-nav.component";
import {AdminFooterComponent} from "./Components/footer/admin-footer.component";
import {AdminErrorPageComponent} from "./Components/error-page/admin-error-page.component";
import {AdminLayoutComponent} from "./admin-layout.component";

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
    CommonModule
  ]
})
export class AdminLayoutModule { }
