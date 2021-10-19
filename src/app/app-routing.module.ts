import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DealersComponent } from './components/dealers/dealers.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"login",component:LoginComponent,canActivate:[LoginGuard]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"dealers",component:DealersComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
