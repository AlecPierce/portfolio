import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { BattleComponent } from "../components/battle.component";
import { HeroFactory } from '../data/heroes';
import { HeroDialogEvent } from '../events/heroDialogEvent';
import { HeroDialogAction } from '../enums/dialogActions.enum';
import { CarouselComponent } from "../components/carousel.component";
import { dragDropComponent } from '../components/dragDrop.component';
import { musicComponent } from '../components/music.component';

@Component({
    selector: 'app-main-menu',
    template: `
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
      }
      @if(v2on) {
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
        <h2 class="text-xl text-center my-4">Drag Available Heroes over to Party to get started</h2>
      }
    
    @if (!v2on) {
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
    }

    @if (v2on) {
      <dragdrop></dragdrop>
    }
    </div>


    @if (musicOn) {
      <music [musicSrc]="musicSrc" [musicSrcTitle]="musicSrcTitle"></music>
    }
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [BattleComponent, CarouselComponent, dragDropComponent, musicComponent]
})
export class MainMenuComponent implements OnDestroy, OnInit {
    responsiveOptions: any[] | undefined;
    heroes: Hero[] = [];
    heroNames: string[] = [];
    addedHeroes: Hero[] = [];
    musicOn: boolean = false;
    musicSrc: string = "";
    musicSrcTitle: string = "";
    heroFactory = new HeroFactory();
    v2on = false;

      constructor(private dialog: MatDialog) {}

      ngOnInit(): void {
        this.heroes = this.heroFactory.createHeroList();
      }

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
        this.musicSrcTitle = this.addedHeroes.length > 1 ? "Persona 4 - Junes Theme" : "Persona 3 - Mass Destruction"
      }

      addHeroToBattle(hero: Hero): void {
        if (!this.addedHeroes.includes(hero)) {
          this.addedHeroes.push(hero);
        }
      }
// get a slider to adjust battle music volume
// also have a toggle for battle music if they dont want it on
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