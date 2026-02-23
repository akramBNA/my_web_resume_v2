import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AppComponent, data: { scrollTo: 'about' } },
  { path: 'technologies', component: AppComponent, data: { scrollTo: 'technologies' } },
  { path: 'projects', component: AppComponent, data: { scrollTo: 'projects' } },
  { path: 'contact', component: AppComponent, data: { scrollTo: 'contact' } },
  { path: '**', redirectTo: '' }
];