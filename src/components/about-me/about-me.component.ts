import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  loading = true;
  fullText = 'Full-Stack JavaScript Developer';
  typedText = '';
  typingSpeed = 60;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loading = false;
    this.startTyping();

    // setTimeout(() => {
    //   this.loading = false;
    //   this.startTyping();
    // }, 1200);
  }

  startTyping() {
    let index = 0;
    const interval = setInterval(() => {
      this.typedText += this.fullText[index];
      index++;
      if (index === this.fullText.length) {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }

  scrollTo(sectionIdOrRoute: string, isRoute = false) {
    if (isRoute) {
      this.router.navigate([sectionIdOrRoute]);
    } else {
      const el = document.getElementById(sectionIdOrRoute);
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }
}
