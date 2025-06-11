import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CommonModule, RouterLink],
    template: `
      <main>
        <a routerLink="/hero-menu">
          <button class="nav-button">
            Hero Menu
          </button>
      </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    `,
    standalone: true
})

export class AppComponent {
  title = 'web-app';
}
