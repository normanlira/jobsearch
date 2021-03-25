import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeadlineComponent } from './pages/home/headline/headline.component';
import { JobfinderComponent } from './pages/home/jobfinder/jobfinder.component';
import { RecentjobComponent } from './pages/home/recentjob/recentjob.component';
import { JobsstatsComponent } from './pages/home/jobsstats/jobsstats.component';
import { WaytouseComponent } from './pages/home/waytouse/waytouse.component';
import { CompaniespostedComponent } from './pages/home/companiesposted/companiesposted.component';
import { AboutComponent } from './pages/home/about/about.component';
import { PostResumeComponent } from './pages/post_resume/post-resume/post-resume.component';
// import { PostJobComponent } from './pages/post_job/post-job/post-job.component';
import { RegisterUserComponent } from './pages/register/register-user/register-user.component';
import { LoginUserComponent } from './pages/login/login-user/login-user.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
// import { AboutusComponent } from './pages/aboutus/aboutus/aboutus.component';
import { JoblistingComponent } from './pages/job/job_listing/joblisting.component';
import { JobDetailsComponent } from './pages/job/job-details/job-details.component';
import { HomeComponent } from './pages/home/home/home.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrivacyComponent } from './pages/politics/privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeadlineComponent,
    JobfinderComponent,
    RecentjobComponent,
    JobsstatsComponent,
    WaytouseComponent,
    CompaniespostedComponent,
    AboutComponent,
    PostResumeComponent,
    // PostJobComponent,
    RegisterUserComponent,
    LoginUserComponent,
    ContactComponent,
    // AboutusComponent,
    JoblistingComponent,
    JobDetailsComponent,
    HomeComponent,
    Error404Component,
    RegisterComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
