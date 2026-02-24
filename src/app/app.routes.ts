import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutMeComponent, data: { scrollTo: 'about' } },
  { path: 'technologies', component: TechnologiesComponent, data: { scrollTo: 'technologies' } },
  { path: 'projects', component: ProjectsComponent, data: { scrollTo: 'projects' } },
  { path: 'contact', component: ContactMeComponent, data: { scrollTo: 'contact' } },
  { path: '**', redirectTo: '' }
];