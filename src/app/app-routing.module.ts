import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {ErrorComponent} from './error/error.component';
import {WorksComponent} from './works/works.component'; // CLI imports router
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: WorksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
