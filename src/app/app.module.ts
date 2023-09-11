import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FitnessContentComponent} from './components/fitnessContent/fitnessContent.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from "./components/home/home.component";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {AdminViewComponent} from "./views/admin-view/admin-view.component";
import {DashboardViewComponent} from "./views/dashboard-view/dashboard-view.component";
import {ProfileViewComponent} from "./views/profile-view/profile-view.component";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AdminComponent} from './components/admin/admin.component';
import {AuthInterceptor} from './guards/interceptor/auth.interceptor';
import {FitnessContentViewComponent} from './views/fitnessContent-view/fitnessContent-view.component';
import {ProfileCardComponent} from './components/profile/profile-card/profile-card.component';
import {ProfileGoalHistoryComponent} from './components/profile/profile-goal-history/profile-goal-history.component';
import {
  ProfileGoalHistoryItemComponent
} from './components/profile/profile-goal-history-item/profile-goal-history-item.component';
import {RegisterViewComponent} from './views/register-view/register-view.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FitnessContentComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AuthGuard,
    HomeViewComponent,
    AdminViewComponent,
    DashboardViewComponent,
    ProfileViewComponent,
    DashboardComponent,
    ProfileComponent,
    AdminComponent,
    FitnessContentViewComponent,
    ProfileCardComponent,
    ProfileGoalHistoryComponent,
    ProfileGoalHistoryItemComponent,
    RegisterViewComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
