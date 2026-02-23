// import { provideFluentDesignSystem } from '@fluentui/web-components';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import {
  provideFluentDesignSystem,
  fluentButton,
  fluentCard,
  fluentTextField
} from '@fluentui/web-components';

provideFluentDesignSystem().register(
  fluentButton(),
  fluentCard(),
  fluentTextField()
);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
