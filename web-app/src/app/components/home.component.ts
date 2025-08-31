import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  imports: [RouterLink],
  template: `
      <div>
        <a routerLink="/hero-menu">
          <button type="button" class="my-2 mx-2 text-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Hero Menu
          </button>
      </a>
        <section class="content text-white">
          <h1 class="text-6xl text-center font-bold my-4 tracking-in-expand-fwd">
            Alec Pierce's Space
          </h1>
          <div class="text-2xl text-center my-4">
              <p>
                Software engineer with 7+ years of full stack experience primarily in
                Angular and Java
              </p>
              <p class="padding-left">
                Experienced in developing portal applications and its reactive forms, form
                validation, and data ingestion
              </p>
              <p class="negative-margin-left">
                Avid fighting game player with a desire to grow and learn something new
                every day
              </p>
          </div>
        </section>
    </div>
    `,
  standalone: true,
  styleUrl: 'home.component.css'
})

export class HomeComponent {
}