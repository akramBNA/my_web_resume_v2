import { Routes } from '@angular/router';
import { ResumeMainComponent } from "../components/resume/resume-main/resume-main.component";
import { HomeComponentComponent } from '../components/home-component/home-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'resume', component: ResumeMainComponent },
  { path: '**', redirectTo: '' }
];