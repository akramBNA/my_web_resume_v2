import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-navbar',
  imports: [],
  templateUrl: './resume-navbar.component.html',
  styleUrl: './resume-navbar.component.css',
})
export class ResumeNavbarComponent {
  mobileOpen = false;

  constructor(private router: Router) {}

  scrollTo(sectionIdOrRoute: string, isRoute = false) {
    if (isRoute) {
      this.router.navigate([sectionIdOrRoute]);
    } else {
      this.router.navigate(['/'], { fragment: sectionIdOrRoute });
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
    const scrollTop = window.scrollY;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
}
