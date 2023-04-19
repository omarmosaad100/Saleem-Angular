import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { RoutingComponent } from './routing/routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivateBtnDirective } from './Directives/Directives';
import { RegisterFormComponent } from './Components/Authentication/RegisterForm/RegisterForm.component';
import { LoginFormComponent } from './Components/Authentication/LoginForm/LoginForm.component';
import { AuthHeaderComponent } from './Components/Authentication/AuthHeader/AuthHeader.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { AdminContainerComponent } from './Components/Admin/AdminContainer/admin-container.component';
import { DeleteDrugComponent } from './Components/Admin/delete-drug/delete-drug.component';
import { AddDrugComponent } from './Components/Admin/add-drug/add-drug.component';
import { GetAllDrugsComponent } from './Components/Admin/get-all-drugs/get-all-drugs.component';
import { GetDrugByIdComponent } from './Components/Admin/get-drug-by-id/get-drug-by-id.component';
import { UpdateDrugComponent } from './Components/Admin/update-drug/update-drug.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ErrorPageComponent,
    RoutingComponent,
    HomePageComponent,
    DeleteDrugComponent,
    AddDrugComponent,

    // Auth Imports
    AuthContainerComponent,
    AuthHeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,

    // directives
    ActivateBtnDirective,
    AdminContainerComponent,
    GetAllDrugsComponent,
    GetDrugByIdComponent,
    UpdateDrugComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularToastifyModule,


  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
