import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarComponent {
  @HostListener('window:scroll', [])

  mobileOpen = false;

  onWindowScroll() {
    const scrollTop = window.scrollY;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMenu() {
    this.mobileOpen = false;
  }
}
