import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  activeFilter = 'all';

  technologies = [
    { name: 'Angular', category: 'frontend', logo: 'https://cdn.simpleicons.org/angular/white' },
    { name: 'React', category: 'frontend', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'React Native', category: 'frontend', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'Next JS', category: 'frontend', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },

    { name: 'NodeJS', category: 'backend', logo: 'https://cdn.simpleicons.org/nodedotjs/white' },
    { name: 'ExpressJS', category: 'backend', logo: 'https://cdn.simpleicons.org/express/white' },

    { name: 'PostgreSQL', category: 'db', logo: 'https://cdn.simpleicons.org/postgresql/white' },
    { name: 'MySQL', category: 'db', logo: 'https://cdn.simpleicons.org/mysql/white' },
    { name: 'MongoDB', category: 'db', logo: 'https://cdn.simpleicons.org/mongodb/white' },
    { name: 'Supabase', category: 'db', logo: 'https://cdn.simpleicons.org/supabase/white' },

    { name: 'Postman', category: 'test', logo: 'https://cdn.simpleicons.org/postman/white' },
    { name: 'Playwright', category: 'test', logo: 'https://cdn.simpleicons.org/playwright/white' },
    { name: 'Cypress', category: 'test', logo: 'https://cdn.simpleicons.org/cypress/white' }
  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  isVisible(category: string) {
    return this.activeFilter === 'all' || this.activeFilter === category;
  }
}