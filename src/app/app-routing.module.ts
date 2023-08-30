import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginViewComponent} from "./views/login-view/login-view.component";
import {DashboardViewComponent} from "./views/dashboard-view/dashboard-view.component";
import {ProfileViewComponent} from "./views/profile-view/profile-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path:"login",
    pathMatch:"full",
    component: LoginViewComponent,
  },
  {
    path:"dashboard",
    component: DashboardViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:"profile",
    component: ProfileViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:"admin",
    component: AdminViewComponent,
    // canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
