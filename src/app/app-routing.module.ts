import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { StaffComponent } from './components/staff/staff.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CountryComponent } from './components/country/country.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { StateComponent } from './components/state/state.component';

const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"login",component:LoginComponent,canActivate:[LoginGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"dealers",component:DealersComponent,canActivate:[AuthGuard]},
  {path:"clients",component:ClientsComponent,canActivate:[AuthGuard]},
  {path:"staff",component:StaffComponent,canActivate:[AuthGuard]},
  {path:"country",component:CountryComponent,canActivate:[AuthGuard]},
  {path:"currency",component:CurrencyComponent,canActivate:[AuthGuard]},
  {path:"state/:countryId/:countryName",component:StateComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
