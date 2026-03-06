import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'SOHABA Showcase Website',
      description: 'Angular, Material Design',
      image: 'assets/PRJ-01.png',
    },
    {
      name: 'SOHABA Dashboard',
      description: 'Angular, Node.js, PostgreSQL',
      image: 'assets/PRJ-02.png',
    },
    {
      name: 'ABC School website & dashboard',
      description: 'Angular, Node.js, PostgreSQL',
      image: 'assets/PRJ-03.png',
    },
  ];

  ngOnInit() {
    this.observeSection();
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
      { threshold: 0.6 }
    );

    observer.observe(section);
  }
}