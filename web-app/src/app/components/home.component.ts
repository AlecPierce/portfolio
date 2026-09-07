import { Component } from '@angular/core';
import { ResumeComponent } from './resume.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { navRoutes } from '../routes';
import { NavRoute } from '../classes/navRoute';

@Component({
  selector: 'home',
  imports: [ResumeComponent, NavBarComponent],
  template: `
    <div class="home-container">
      <div class="home-container-content">
        <app-nav-bar [routes]="routes"></app-nav-bar>
        <div class="min-[920px]:justify-center min-[920px]:flex">
          <section class="text-white flex flex-col gap-4 content-section">
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
                Software engineer with 8+ years of full stack experience
                primarily in Angular and Java
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
                <a
                  href="https://www.linkedin.com/in/alexander-pierce-52430112b/"
                >
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
                <span class="tooltip-text">Contact Business Email</span>
                <a href="mailto:alec@ap-codes.com">
                  <i
                    class="bi bi-suitcase-lg icon"
                    style="font-size: 2rem; color: cornflowerblue;"
                    title="alec@ap-codes.com"
                  ></i>
                </a>
              </div>
              <div class="m-2 tooltip">
                <span class="tooltip-text">Contact Personal Email</span>
                <a href="mailto:alecpierce19@gmail.com">
                  <i
                    class="bi bi-envelope-at icon"
                    style="font-size: 2rem; color: cornflowerblue;"
                    title="alecpierce19@gmail.com"
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
    </div>
  `,
  standalone: true,
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  showResume = false;
  routes: NavRoute[] = [navRoutes.TOOL_MENU, navRoutes.SALES_ANALYSIS];

  constructor() {
    this.showResume = false;
  }

  toggleResume() {
    this.showResume = !this.showResume;
    if (this.showResume) {
      setTimeout(() => {
        const resumeElement = document.getElementById('resume-container');
        resumeElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}
