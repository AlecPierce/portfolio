import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { BattleComponent } from "../components/battle.component";
import { HeroFactory } from '../data/heroes';
import { HeroDialogEvent } from '../events/heroDialogEvent';
import { HeroDialogAction } from '../enums/dialogActions.enum';
import { CarouselComponent } from "../components/carousel.component";

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
      <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
      <h2 class="text-xl text-center my-4">Click on a Hero to get started</h2>
    
      <div class="hero-container">
        <carousel (clicked)="heroClicked($event)" [heroes]="heroes"></carousel>
      </div>

      @if (addedHeroes.length > 0) {
        <div class="battle-container">
          <h1 class="text-2xl text-center font-bold my-4">Battle Menu</h1>
          <battle [heroes]="addedHeroes"></battle>
          <button class="battle-button" (click)="startBattle()">
            Battle
          </button>
        </div>
      }
    </div>
    @if (musicOn) {
      <audio autoplay loop [volume]="0.25">
        <source [src]="musicSrc" type="audio/mp3">
      </audio>
    }
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [BattleComponent, CarouselComponent]
})
export class MainMenuComponent implements OnDestroy, OnInit {
    responsiveOptions: any[] | undefined;
    heroes: Hero[] = [];
    heroNames: string[] = [];
    addedHeroes: Hero[] = [];
    musicOn: boolean = false;
    musicSrc: string = "";
    heroFactory = new HeroFactory();

      constructor(private dialog: MatDialog) {}

      ngOnInit(): void {
        this.heroes = this.heroFactory.createHeroList();
      }

      ngOnDestroy(): void {
          this.dialog.closeAll();
      }

      heroClicked(hero: Hero): void {
        this.setMusic();
        const dialogRef = this.dialog.open(DialogMenuComponent, {
          width: '250px',
          data: hero
        });
        dialogRef.afterClosed().subscribe((dialogEvent: HeroDialogEvent) => {
          this.heroDialogClosed(dialogEvent)
        });
      }

      heroDialogClosed(dialogEvent: HeroDialogEvent): void {
        if (dialogEvent.action === HeroDialogAction.Add) {
          this.addHeroToBattle(dialogEvent.hero);
        } else if (dialogEvent.action === HeroDialogAction.Remove) {
          this.addedHeroes = this.addedHeroes.filter(heroInParty => heroInParty.heroName !== dialogEvent.hero.heroName);
        }
        this.musicSrc = this.addedHeroes.length > 1 ? "../assets/persona4-junes.mp3" : "../assets/persona3-mass-destruction.mp3";
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