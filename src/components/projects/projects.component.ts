import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  currentIndex = 0;
  autoSlideInterval: any;
  startX = 0;
  isModalOpen = false;
  selectedProject: any = null;

  projects = [
    {
      name: 'Project One',
      description: 'Enterprise dashboard built with Angular & Fluent2.',
      image: 'https://picsum.photos/1400/800?random=1',
    },
    {
      name: 'Project Two',
      description: 'Real-time chat application using Socket.IO.',
      image: 'https://picsum.photos/1400/800?random=2',
    },
    {
      name: 'Project Three',
      description: 'Full-stack platform with Spring Boot & PostgreSQL.',
      image: 'https://picsum.photos/1400/800?random=3',
    },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  resetAutoSlide() {
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.resetAutoSlide();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.resetAutoSlide();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    if (this.startX - endX > 50) this.next();
    if (endX - this.startX > 50) this.prev();
  }
}
