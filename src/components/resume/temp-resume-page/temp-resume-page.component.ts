import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-temp-resume-page',
  imports: [RouterLink],
  templateUrl: './temp-resume-page.component.html',
  styleUrl: './temp-resume-page.component.css',
})
export class TempResumePageComponent {
  goBack() {
    window.history.back();
  }
}
