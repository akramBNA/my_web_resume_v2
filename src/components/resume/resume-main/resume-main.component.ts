import { Component } from '@angular/core';
// import { TempResumePageComponent } from '../temp-resume-page/temp-resume-page.component';
import { ResumeNavbarComponent } from '../resume-navbar/resume-navbar.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-resume-main',
  imports: [ResumeNavbarComponent, ContactDetailsComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {}
