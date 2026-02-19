import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TechnologiesComponent } from '../components/technologies/technologies.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProjectsComponent, ContactMeComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_web_resume_v2';
}
