import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-navbar',
  templateUrl: './resume-navbar.component.html',
  styleUrl: './resume-navbar.component.css',
})
export class ResumeNavbarComponent {
  mobileOpen = false;

  sections = [
    'contact-details',
    'experience',
    'internships',
    'education',
    'skills',
    'certificates',
    'languages',
  ];

  activeSection = 'contact-details';

  constructor(private router: Router) {}

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      this.router.navigate([], {
        fragment: sectionId,
        queryParamsHandling: 'preserve',
        replaceUrl: true,
      });

      this.activeSection = sectionId;
    }

    this.closeMenu();
  }

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMenu() {
    this.mobileOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + 120;

    for (let section of this.sections) {
      const element = document.getElementById(section);

      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
        }
      }
    }
  }
}
