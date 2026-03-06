import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { ServicesComponent } from "../components/services/services.component";
import { ResumeMainComponent } from "../components/resume/resume-main/resume-main.component";

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'resume', component: ResumeMainComponent },
  { path: '**', redirectTo: '' }
];