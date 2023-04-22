import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './Components/Authentication/AuthContainer/AuthContainer.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorPageComponent } from './layout/Components/error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';

const routes: Routes = [
  {path:"" , component : LayoutComponent,children:[
  {path:"" , component:HomePageComponent}

]},
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
