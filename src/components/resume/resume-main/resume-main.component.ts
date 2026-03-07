import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TempResumePageComponent } from '../temp-resume-page/temp-resume-page.component';

@Component({
  selector: 'app-resume-main',
  imports: [RouterLink, TempResumePageComponent],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {
}
