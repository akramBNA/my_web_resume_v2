import { Component } from '@angular/core';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { ExperienceComponent } from '../experience/experience.component';
import { InternshipsComponent } from '../internships/internships.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-resume-main',
  imports: [
    ContactDetailsComponent,
    ExperienceComponent,
    InternshipsComponent,
    EducationComponent,
    SkillsComponent,
  ],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {}
