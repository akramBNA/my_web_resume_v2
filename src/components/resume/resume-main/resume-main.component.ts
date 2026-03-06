import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume-main',
  imports: [RouterLink],
  templateUrl: './resume-main.component.html',
  styleUrl: './resume-main.component.css',
})
export class ResumeMainComponent {
  goBack() {
    window.history.back();
  }
}
