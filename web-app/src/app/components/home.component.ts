import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from './resume.component';

@Component({
  selector: 'home',
  imports: [RouterLink, ResumeComponent],
  template: `
    <div>
      <div class="md:m-2" style="display: grid; padding-bottom: 8rem;">
        <a routerLink="/tool-menu">
          <button type="button" class="button" style="position: absolute; ">
            Tool Menu
          </button>
        </a>
        <a routerLink="/sales-analysis">
          <button
            type="button"
            class="button"
            style="position: absolute; left: 8rem;"
          >
            Sales Analyzer
          </button>
        </a>
        <button
          type="button"
          class="button"
          style="position: absolute; justify-self: end;"
          (click)="toggleColorScheme()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-moon"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"
            />
          </svg>
        </button>
      </div>
      <div class="min-[920px]:justify-center min-[920px]:flex">
        <section class="text-white flex flex-col gap-4">
          <div
            class="mx-auto text-4xl font-bold tracking-in-expand-fwd md:pl-4 md:text-6xl"
          >
            Alec Pierce
          </div>
          <div>
            <img
              src="../assets/me.jpg"
              alt="Alec Pierce Headshot"
              class="headshot"
            />
          </div>
          <div class="text-xl max-[920px]:size-fit">
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Software engineer with 8+ years of full stack experience primarily
              in Angular and Java
            </p>
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Experience creating and maintaining websites
            </p>
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Experience creating tools for existing applications
            </p>
          </div>
          <div class="size-fit grid grid-cols-5 pl-4">
            <div class="m-2 tooltip">
              <span class="tooltip-text">LinkedIn</span>
              <a href="https://www.linkedin.com/in/alexander-pierce-52430112b/">
                <i
                  class="bi bi-linkedin icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="linkedin"
                ></i>
              </a>
            </div>
            <div class="m-2 tooltip">
              <span class="tooltip-text">GitHub</span>
              <a href="https://github.com/AlecPierce">
                <i
                  class="bi bi-github icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="github"
                ></i>
              </a>
            </div>
            <div class="m-2 tooltip">
              <span class="tooltip-text">Contact Me</span>
              <a href="mailto:alecpierce19@gmail.com">
                <i
                  class="bi bi-envelope-at icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="email"
                ></i>
              </a>
            </div>
            <div class="m-2 tooltip">
              <span class="tooltip-text">Download Resume</span>
              <a href="assets/Resume.pdf" download="AlecPierce-Resume.pdf">
                <i
                  class="bi bi-download icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="download resume"
                ></i>
              </a>
            </div>
            <div (click)="toggleResume()" class="m-2 tooltip mobile-hide">
              <span class="tooltip-text">Show/Hide Resume</span>
              @if (!showResume) {
                <i
                  class="bi bi-eye icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="show/hide resume"
                ></i>
              } @else {
                <i
                  class="bi bi-eye-slash icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="show/hide resume"
                ></i>
              }
            </div>
          </div>
          @if (showResume) {
            <resume></resume>
          }
        </section>
      </div>
    </div>
  `,
  standalone: true,
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  showResume = false;

  constructor() {
    this.showResume = false;
  }

  toggleResume() {
    this.showResume = !this.showResume;
  }

  toggleColorScheme() {
    const root = document.documentElement;
    root.classList.toggle('dark');
    root.classList.toggle('light');
  }
}
