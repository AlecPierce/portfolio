import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from './resume.component';

@Component({
  selector: 'home',
  imports: [RouterLink, ResumeComponent],
  template: `
    <div>
      <div class="md:m-2">
        <a routerLink="/tool-menu">
          <button
            type="button"
            class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          >
            Tool Menu
          </button>
        </a>
        <a routerLink="/sales-analysis">
          <button
            type="button"
            class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          >
            Sales Analyzer
          </button>
        </a>
      </div>
      <div class="min-[920px]:justify-center min-[920px]:flex">
        <section class="text-white flex flex-col gap-4">
          <div
            class="mx-auto text-4xl font-bold tracking-in-expand-fwd md:pl-4 md:text-6xl"
          >
            Alec Pierce
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
}
