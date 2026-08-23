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
import { HeroComponent } from '../components/hero.component';
import { ScratchOffComponent } from '../components/scratch-off/scratch-off.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { navRoutes } from '../routes';

@Component({
  selector: 'app-main-menu',
  template: `
    <app-nav-bar [routes]="routes"></app-nav-bar>
    <div class="flexbox text-white">
      <h1 class="text-2xl text-center font-bold my-4">Tool Menu</h1>
      <h2 class="text-xl text-center my-4">Click on a Tool to get started</h2>

      <div class="flex flex-wrap justify-center gap-4">
        <button type="button" class="button" (click)="carouselClicked()">
          Carousel with Dialog
        </button>

        <button type="button" class="button" (click)="dragDropClicked()">
          Drag and Drop
        </button>

        <button type="button" class="button" (click)="musicClicked()">
          Music Player
        </button>

        <button type="button" class="button" (click)="scratchOffClicked()">
          Scratch-offs
        </button>
      </div>

      @if (carouselOn) {
        <h2 class="text-xl text-center my-4">
          Click Heroes and add or remove them from Party
        </h2>
        <h1 class="text-2xl text-center font-bold">Heroes</h1>
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

    @if (scratchOffOn) {
      <scratch-off></scratch-off>
    }
  `,
  styleUrls: ['./main-menu.component.css'],
  imports: [
    CarouselComponent,
    dragDropComponent,
    musicComponent,
    HeroComponent,
    ScratchOffComponent,
    NavBarComponent,
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
  scratchOffOn: boolean = false;
  musicSrc: string = '../assets/Gundam Zeta - Kamille-Bidan.mp3';
  musicSrcTitle: string = 'Gundam Zeta - Kamille Bidan';
  heroFactory = new HeroFactory();
  routes = [navRoutes.HOME, navRoutes.SALES_ANALYSIS];

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

  scratchOffClicked() {
    this.scratchOffOn = !this.scratchOffOn;
  }
}
