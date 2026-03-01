import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent {
  frontendTech = [
    { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/white' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'React Native', logo: 'https://cdn.simpleicons.org/react/white' },
    { name: 'Next JS', logo: 'https://cdn.simpleicons.org/nextdotjs/white' },
  ];

  backendTech = [
    { name: 'NodeJS', logo: 'https://cdn.simpleicons.org/nodedotjs/white' },
    { name: 'ExpressJS', logo: 'https://cdn.simpleicons.org/express/white' },
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/white' },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.simpleicons.org/springboot/white',
    },
    {
      name: 'Socket.IO',
      logo: 'https://cdn.simpleicons.org/socketdotio/white',
    },
    { name: 'RabbitMQ', logo: 'https://cdn.simpleicons.org/rabbitmq/white' },
    { name: 'C', logo: 'https://cdn.simpleicons.org/c/white' },
    { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/white' },
  ];

  dbTech = [
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.simpleicons.org/postgresql/white',
    },
    { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/white' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/white' },
    { name: 'Supabase', logo: 'https://cdn.simpleicons.org/supabase/white' },
  ];

  testTech = [
    { name: 'Postman', logo: 'https://cdn.simpleicons.org/postman/white' },
    {
      name: 'Playwright',
      logo: 'https://cdn.simpleicons.org/microsoftplaywright/white',
    },
    { name: 'Cypress', logo: 'https://cdn.simpleicons.org/cypress/white' },
  ];
}
