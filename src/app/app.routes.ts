import { Routes } from '@angular/router';
import { ResumeMainComponent } from '../components/resume/resume-main/resume-main.component';
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { ContactDetailsComponent } from '../components/resume/contact-details/contact-details.component';
import { ExperienceComponent } from '../components/resume/experience/experience.component';
import { InternshipsComponent } from '../components/resume/internships/internships.component';
import { EducationComponent } from '../components/resume/education/education.component';
import { SkillsComponent } from '../components/resume/skills/skills.component';
import { CertificatesComponent } from '../components/resume/certificates/certificates.component';
import { LanguagesComponent } from '../components/resume/languages/languages.component';

export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  {
    path: 'resume',
    component: ResumeMainComponent,
    children: [
      { path: '', redirectTo: 'contact-details', pathMatch: 'full' },

      { path: 'contact-details', component: ContactDetailsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'internships', component: InternshipsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'languages', component: LanguagesComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
