import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProjectsComponent,
    ContactMeComponent,
    TechnologiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my_web_resume_v2';
}
