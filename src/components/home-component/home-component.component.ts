import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutMeComponent } from "../about-me/about-me.component";
import { ServicesComponent } from '../services/services.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-component',
  imports: [
    CommonModule,
    NavbarComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactMeComponent,
    AboutMeComponent,
    FooterComponent
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
