import { RegisterloginComponent } from './Pages/registerlogin/registerlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { Component, NgModule } from '@angular/core';
import { RegisterComponent } from './Pages/register/register.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { Error404Component } from './Pages/error404/error404.component';
import { StatusComponent } from './Pages/status/status.component';
import { OpportunitiesComponent } from './Pages/opportunities/opportunities.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registerlogin',component:RegisterloginComponent},
  {path:'status',component:StatusComponent},
{path:'opportunity',component:OpportunitiesComponent},
  {path:'**',component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{
  
}
