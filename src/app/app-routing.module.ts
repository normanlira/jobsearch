import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus/aboutus.component';
import { PostJobComponent } from './pages/post_job/post-job/post-job.component';
import { PostResumeComponent } from './pages/post_resume/post-resume/post-resume.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RegisterUserComponent } from './pages/register/register-user/register-user.component';
import { LoginUserComponent } from './pages/login/login-user/login-user.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { JoblistingComponent } from './pages/job/job_listing/joblisting.component';
import { JobDetailsComponent } from './pages/job/job-details/job-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  // { path: 'aboutus', loadChildren: './pages/aboutus/aboutus.module#AboutusModule' },
  // { path: 'post-job', loadChildren: './pages/post_job/post-job/post-job.module#PostJobModule' },
  { path: 'post-job', component: PostJobComponent },
  { path: 'PostResume', component: PostResumeComponent },
  { path: 'RegisterUser', component: RegisterUserComponent },
  { path: 'LoginUser', component: LoginUserComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Joblisting', component: JoblistingComponent },
  { path: 'JobDetails', component: JobDetailsComponent },
  // { path: 'post-job', component: PostJobComponent },

  // { path: '',   redirectTo: 'first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', pathMatch: 'full', redirectTo: 'home' }
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

  // { path: 'characters',  loadChildren: './pages/characters/characters.module#CharactersModule' },
  // { path: 'students',  loadChildren: './pages/students/students.module#StudentsModule' },
  // { path: 'teachers',  loadChildren: './pages/teachers/teachers.module#TeachersModule' },
  // { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' },
  // { path: 'view/:name/:patronus/:age',  loadChildren: './pages/viewdata/viewdata.module#ViewdataModule' },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: Error404Component },  // Wildcard route for a 404 page

  // { path: '',   redirectTo: 'home', pathMatch: 'home' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
