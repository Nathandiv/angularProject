import { RegisterloginComponent } from './Pages/registerlogin/registerlogin.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { Component } from '@angular/core';
import { RegisterComponent } from './Pages/register/register.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { LoginComponent } from './Pages/login/login.component';
import { Error404Component } from './Pages/error404/error404.component';
import { StatusComponent } from './Pages/status/status.component';
import { OpportunitiesComponent } from './Pages/opportunities/opportunities.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'registerlogin',component:RegisterloginComponent},
  {path:'**',component:Error404Component},
{path:'status',component:StatusComponent},
{path:'opportunity',component:OpportunitiesComponent}
]
