import { Component } from '@angular/core';
import { TempResumePageComponent } from '../temp-resume-page/temp-resume-page.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

@Component({
  selector: 'app-resume-main',
  imports: [TempResumePageComponent, ContactDetailsComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {
}
