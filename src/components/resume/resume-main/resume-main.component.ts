import { Component } from '@angular/core';
// import { TempResumePageComponent } from '../temp-resume-page/temp-resume-page.component';
// import { ResumeNavbarComponent } from '../resume-navbar/resume-navbar.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
// import { ResumeFooterComponent } from '../resume-footer/resume-footer.component';

@Component({
  selector: 'app-resume-main',
  imports: [ContactDetailsComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {}
