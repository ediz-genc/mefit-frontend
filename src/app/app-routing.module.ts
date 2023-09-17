import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {DashboardViewComponent} from "./views/dashboard-view/dashboard-view.component";
import {ProfileViewComponent} from "./views/profile-view/profile-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {FitnessContentViewComponent} from './views/fitnessContent-view/fitnessContent-view.component';
import {RegisterViewComponent} from './views/register-view/register-view.component';
import { AuthGuard } from './guards/auth.guard';
import { regGuard } from './guards/reg.guard';
import { adminGuard } from './guards/admin.guard';
import { PerformWorkoutViewComponent } from './views/perform-workout-view/perform-workout-view.component';


const routes: Routes = [

  {
    path: "",
    component: HomeViewComponent,
  },

  {
    path: "dashboard",
    component: DashboardViewComponent,
    canActivate:[AuthGuard, regGuard]
  },
  {
    path: "fitness-content",
    component: FitnessContentViewComponent,
    canActivate:[AuthGuard, regGuard]
  },
  {
    path: "profile",
    component: ProfileViewComponent,
    canActivate:[AuthGuard, regGuard]
    
  },
  {
    path: "register",
    component: RegisterViewComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "admin",
    component: AdminViewComponent,
    canActivate:[AuthGuard, regGuard, adminGuard]
  },
  {
    path: "perform-workout",
    component: PerformWorkoutViewComponent,
    canActivate:[AuthGuard, regGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
