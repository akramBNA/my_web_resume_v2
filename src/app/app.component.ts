import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'my_web_resume_v2';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
  }
}
