
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, RouterLink],
    template: `
      <main>
        <a routerLink="/hero-menu">
          <button type="button" class="my-2 mx-1 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Hero Menu
          </button>
      </a>
        <section class="content text-white">
          <h1 class="text-6xl text-center font-bold my-4 tracking-in-expand-fwd">
            Alec Pierce's Portfolio
          </h1>
          <router-outlet></router-outlet>
        </section>
      </main>
    `,
    standalone: true
})

export class AppComponent {
  title = 'web-app';
}
