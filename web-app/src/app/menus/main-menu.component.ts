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
    </div>
    <div class="flexbox text-white">
      <!-- lets keep v2 off until v1 is done -->
      <!-- @if(!v2on) {
        <button class="button" (click)="toggleV2()">v2</button>
      }
      @if(v2on) {
        <button class="button" (click)="toggleV2()">v1</button>
      } -->
      @if(!v2on) {
      <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
      <h2 class="text-xl text-center my-4">Click on a Hero to get started</h2>
      } @if(v2on) {
      <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
      <h2 class="text-xl text-center my-4">
        Drag Available Heroes over to Party to get started
      </h2>
      } @if (!v2on) {
      <div class="hero-container">
        <!-- BUG: hero is in party still after traversing to home and back to hero menu but "Battle" button doesnt show -->
        <carousel (clicked)="heroClicked($event)" [heroes]="heroes"></carousel>
      </div>

      @if (addedHeroes.length > 0) {
      <div class="battle-container m-2">
        <!-- <h1 class="text-2xl text-center font-bold my-4">Battle Menu</h1> -->
        <!-- <battle [heroes]="addedHeroes"></battle> -->
        <button
          type="button"
          class="my-2 mx-2 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white border-[cornflowerblue] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-white-300 dark:border-[cornflowerblue] dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white-800"
          (click)="startBattle()"
        >
          Battle
        </button>
      </div>
      } } @if (v2on) {
      <dragdrop></dragdrop>
      }
    </div>

    @if (musicOn) {
    <music [musicSrc]="musicSrc" [musicSrcTitle]="musicSrcTitle"></music>
    }
  `,
  styleUrls: ['./main-menu.component.scss'],
  imports: [CarouselComponent, dragDropComponent, musicComponent, RouterLink],
  standalone: true,
})
export class MainMenuComponent implements OnDestroy {
  responsiveOptions: any[] | undefined;
  heroes: Hero[] = [];
  heroNames: string[] = [];
  addedHeroes: Hero[] = [];
  musicOn: boolean = false;
  musicSrc: string = '../assets/Gundam Zeta - Kamille-Bidan.mp3';
  musicSrcTitle: string = 'Gundam Zeta - Kamille Bidan';
  heroFactory = new HeroFactory();
  v2on = false;

  constructor(private dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.dialog.closeAll();
  }

  toggleV2(): void {
    this.v2on = !this.v2on;
  }

  heroClicked(hero: Hero): void {
    this.setMusic();
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
        (heroInParty) => heroInParty.heroName !== dialogEvent.hero.heroName
      );
    }
  }

  addHeroToBattle(hero: Hero): void {
    if (!this.addedHeroes.includes(hero)) {
      this.addedHeroes.push(hero);
    }
  }

  startBattle() {
    this.setMusic(true);
  }

  setMusic(turnOn: boolean = false) {
    this.musicOn = false;
    if (turnOn) {
      this.musicOn = true;
    }
  }
}
