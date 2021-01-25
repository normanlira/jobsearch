import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostJobComponent } from './post-job.component';

const routes: Routes = [
  { path: '', component: PostJobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostJobRoutingModule { }
