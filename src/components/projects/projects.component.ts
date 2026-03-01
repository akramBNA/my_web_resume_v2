import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;
  startX = 0;
  isPaused = false;

  projects = [
    {
      name: 'Project One',
      description: 'Enterprise dashboard built with Angular & Fluent2.',
      image: 'https://picsum.photos/1600/900?random=1',
    },
    {
      name: 'Project Two',
      description: 'Real-time chat application using Socket.IO.',
      image: 'https://picsum.photos/1600/900?random=2',
    },
    {
      name: 'Project Three',
      description: 'Full-stack platform with Spring Boot & PostgreSQL.',
      image: 'https://picsum.photos/1600/900?random=3',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
    this.observeSection();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isPaused) this.next(false);
    }, 5000);
  }

  next(reset = true) {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    if (reset) this.restartAutoSlide();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.restartAutoSlide();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.restartAutoSlide();
  }

  restartAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    if (this.startX - endX > 50) this.next();
    if (endX - this.startX > 50) this.prev();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }

  observeSection() {
    const section = document.getElementById('projects');
    const navLink = document.querySelector('a[href="#projects"]');

    if (!section || !navLink) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navLink.classList.add('active-nav');
        } else {
          navLink.classList.remove('active-nav');
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(section);
  }
}
