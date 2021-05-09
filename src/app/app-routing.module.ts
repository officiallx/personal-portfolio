import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
