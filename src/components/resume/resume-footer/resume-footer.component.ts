import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-footer',
  imports: [],
  templateUrl: './resume-footer.component.html',
  styleUrl: './resume-footer.component.css',
})
export class ResumeFooterComponent {
  currentYear: number = new Date().getFullYear();
}
