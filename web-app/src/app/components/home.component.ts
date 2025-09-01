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
          <!-- issue where texts are unaligned when window size changes -->
          <div class="text-2xl text-center my-8">
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
          <!-- issue where icons are out of place when window size changes -->
          <div class="text-center grid grid-cols-4 flex">
            <div style="margin: 0 0 16rem 32rem;">
              <a href="https://www.linkedin.com/in/alexander-pierce-52430112b/">
                <i class="bi bi-linkedin icon" style="font-size: 2rem; color: cornflowerblue;" title="linkedin"></i>
              </a>
            </div>
            <div style="margin: 0 0 0 16rem;">
              <a href="https://github.com/AlecPierce">
                <i class="bi bi-github icon" style="font-size: 2rem; color: cornflowerblue;" title="github"></i>
              </a>
            </div>
            <div>
              <a href="mailto:alecpierce19@gmail.com">
                <i class="bi bi-envelope-at icon" style="font-size: 2rem; color: cornflowerblue;" title="email"></i>
              </a>
            </div>
            <div style="margin: 0 16rem 0 0;">
              <a href="https://www.dropbox.com/scl/fi/fp7g6d9t4epp1kphp1kl8/Alexander-Pierce-Resume.pdf?rlkey=9key7k8mi9keo9qlrknp92895&st=t4hovztf&dl=0">
                <i class="bi bi-dropbox icon" style="font-size: 2rem; color: cornflowerblue;" title="dropbox"></i>
              </a>
            </div>
          </div>
        </section>
    </div>
    `,
  standalone: true,
  styleUrl: 'home.component.css'
})

export class HomeComponent {
}