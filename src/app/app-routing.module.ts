import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { HomePageComponent } from './Components/HomePage/HomePage/HomePage.component';

const routes: Routes = [
  {path:"" , component : HomePageComponent},
  {path:"Home" , redirectTo:""},

  {path:"Login",component : AuthContainerComponent},
  {path:"Register",component : AuthContainerComponent},
  {path:"**",component : ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
