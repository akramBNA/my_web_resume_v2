import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  frontend = [
    { name: 'Angular', logo: 'assets/logos/angular.svg' },
    { name: 'React', logo: 'assets/logos/react.svg' },
    { name: 'React Native', logo: 'assets/logos/react-native.svg' },
    { name: 'Next JS', logo: 'assets/logos/nextjs.svg' }
  ];

  backend = [
    { name: 'NodeJS', logo: 'assets/logos/nodejs.svg' },
    { name: 'ExpressJS', logo: 'assets/logos/express.svg' }
  ];

  database = [
    { name: 'PostgreSQL', logo: 'assets/logos/postgresql.svg' },
    { name: 'MySQL', logo: 'assets/logos/mysql.svg' },
    { name: 'MongoDB', logo: 'assets/logos/mongodb.svg' },
    { name: 'Supabase', logo: 'assets/logos/supabase.svg' }
  ];

  testing = [
    { name: 'Postman', logo: 'assets/logos/postman.svg' },
    { name: 'Playwright', logo: 'assets/logos/playwright.svg' },
    { name: 'Cypress', logo: 'assets/logos/cypress.svg' }
  ];

}