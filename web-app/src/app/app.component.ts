import { Component } from '@angular/core';
import { MainMenuComponent } from './menus/main-menu.component';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule],
    template: `
      <main>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
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

//    template: `<app-main-menu></app-main-menu>`
