import { Component, OnDestroy } from '@angular/core';
import { Hero } from '../classes/hero';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { HeroFactory } from '../data/heroes';
import { HeroDialogEvent } from '../events/heroDialogEvent';
import { HeroDialogAction } from '../enums/dialogActions.enum';
import { CarouselComponent } from '../components/carousel.component';
import { dragDropComponent } from '../components/dragDrop.component';
import { musicComponent } from '../components/music.component';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../components/hero.component';

@Component({
  selector: 'app-main-menu',
  template: `
    <div class="m-2">
      <a routerLink="/">
        <button
          type="button"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
        >
          Home
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
    <div class="flexbox text-white">
      <h1 class="text-2xl text-center font-bold my-4">Tool Menu</h1>
      <h2 class="text-xl text-center my-4">Click on a Tool to get started</h2>

      <div class="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          (click)="carouselClicked()"
        >
          Carousel with Dialog
        </button>

        <button
          type="button"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          (click)="dragDropClicked()"
        >
          Drag and Drop
        </button>

        <button
          type="button"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          (click)="musicClicked()"
        >
          Music Player
        </button>
      </div>

      @if (carouselOn) {
        <div class="hero-container">
          <!-- BUG: hero is in party still after traversing to home and back to hero menu but "Battle" button doesnt show -->
          <carousel
            (clicked)="heroClicked($event)"
            [heroes]="heroes"
          ></carousel>
        </div>
        @if (addedHeroes.length > 0) {
          <h1 class="text-2xl text-center font-bold">Party</h1>
          <div class="added-hero-container">
            @for (hero of addedHeroes; track hero) {
              <hero
                [hero]="hero"
                [description]="hero.description"
                [isAdded]="true"
              ></hero>
            }
          </div>
        }
      }

      @if (dragDropOn) {
        <h2 class="text-xl text-center my-4">
          Drag Available Heroes over to Party to get started
        </h2>
        <div class="drag-drop-container">
          <dragdrop [heroes]="heroes"></dragdrop>
        </div>
      }
    </div>

    @if (musicOn) {
      <music [musicSrc]="musicSrc" [musicSrcTitle]="musicSrcTitle"></music>
    }
  `,
  styleUrls: ['./main-menu.component.scss'],
  imports: [
    CarouselComponent,
    dragDropComponent,
    musicComponent,
    RouterLink,
    HeroComponent,
  ],
  standalone: true,
})
export class MainMenuComponent implements OnDestroy {
  responsiveOptions: any[] | undefined;
  heroes: Hero[] = [];
  heroNames: string[] = [];
  addedHeroes: Hero[] = [];
  musicOn: boolean = false;
  carouselOn: boolean = false;
  dragDropOn: boolean = false;
  musicSrc: string = '../assets/Gundam Zeta - Kamille-Bidan.mp3';
  musicSrcTitle: string = 'Gundam Zeta - Kamille Bidan';
  heroFactory = new HeroFactory();

  constructor(private dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.dialog.closeAll();
  }

  heroClicked(hero: Hero): void {
    const dialogRef = this.dialog.open(DialogMenuComponent, {
      width: '250px',
      data: hero,
    });
    dialogRef.afterClosed().subscribe((dialogEvent: HeroDialogEvent) => {
      this.heroDialogClosed(dialogEvent);
    });
  }

  heroDialogClosed(dialogEvent: HeroDialogEvent): void {
    if (dialogEvent.action === HeroDialogAction.Add) {
      this.addHeroToBattle(dialogEvent.hero);
    } else if (dialogEvent.action === HeroDialogAction.Remove) {
      this.addedHeroes = this.addedHeroes.filter(
        (heroInParty) => heroInParty.heroName !== dialogEvent.hero.heroName,
      );
    }
  }

  addHeroToBattle(hero: Hero): void {
    if (!this.addedHeroes.includes(hero)) {
      this.addedHeroes.push(hero);
    }
  }

  carouselClicked() {
    this.carouselOn = !this.carouselOn;
  }

  dragDropClicked() {
    this.dragDropOn = !this.dragDropOn;
  }

  musicClicked() {
    this.musicOn = !this.musicOn;
  }
}
