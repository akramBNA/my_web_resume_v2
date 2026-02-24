import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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
}
