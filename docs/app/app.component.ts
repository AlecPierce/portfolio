import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule],
    template: `
      <main>
        <a [routerLink]="['/hero-menu']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
          <button class="nav-button">
            Hero Menu
          </button>
      </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    `
})
export class AppComponent {
  title = 'web-app';
}
