import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {DashboardViewComponent} from "./views/dashboard-view/dashboard-view.component";
import {ProfileViewComponent} from "./views/profile-view/profile-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {FitnessContentViewComponent} from './views/fitnessContent-view/fitnessContent-view.component';
import {RegisterViewComponent} from './views/register-view/register-view.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeViewComponent,
  },
  {
    path: "dashboard",
    component: DashboardViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "profile",
    component: ProfileViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "program",
    component: FitnessContentViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "admin",
    component: AdminViewComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: "register",
    component: RegisterViewComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
