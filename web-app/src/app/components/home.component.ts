import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from './resume.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'home',
  imports: [RouterLink, ResumeComponent],
  template: `
    <div>
      <div class="md:m-2">
        <a routerLink="/hero-menu">
          <button
            type="button"
            class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          >
            Hero Menu
          </button>
        </a>
      </div>
      <div class="min-[920px]:justify-center min-[920px]:flex">
        <section class="text-white flex flex-col gap-4">
          <div
            class="mx-auto text-4xl font-bold tracking-in-expand-fwd md:pl-4 md:text-6xl"
          >
            Alec Pierce's Space
          </div>
          <div class="text-xl max-[920px]:size-fit">
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Software engineer with 7+ years of full stack experience primarily
              in Angular and Java
            </p>
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Experienced in developing portal applications and its reactive
              forms, form validation, and data ingestion
            </p>
            <p class="p-4 m-2 border border-[cornflowerblue]">
              Avid fighting game player with a desire to grow and learn
              something new every day
            </p>
          </div>
          <div class="size-fit grid grid-cols-4 pl-4">
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
              <span class="tooltip-text">Resume</span>
              <a href="assets/Resume.pdf" download="AlecPierce-Resume.pdf">
                <i
                  class="bi bi-download icon"
                  style="font-size: 2rem; color: cornflowerblue;"
                  title="download resume"
                ></i>
              </a>
            </div>
          </div>
          <resume></resume>
        </section>
      </div>
    </div>
  `,
  standalone: true,
  styleUrl: 'home.component.css',
})
export class HomeComponent {}
