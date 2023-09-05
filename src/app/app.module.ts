import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramComponent } from './components/program/program.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { ExcerciseComponent } from './components/excercise/excercise.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/auth.guard';
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginViewComponent} from "./views/login-view/login-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {DashboardViewComponent} from "./views/dashboard-view/dashboard-view.component";
import {ProfileViewComponent} from "./views/profile-view/profile-view.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProgramViewComponent } from './views/program-view/program-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    WorkoutComponent,
    LoginComponent,
    ExcerciseComponent,
    NavbarComponent,
    FooterComponent,
    AuthGuard,
    LoginViewComponent,
    AdminViewComponent,
    DashboardViewComponent,
    ProfileViewComponent,
    DashboardComponent,
    ProfileComponent,
    AdminComponent,
    ProgramViewComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
