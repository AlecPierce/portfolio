import { Component } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { BattleComponent } from "../components/battle.component";
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
        <h2 class="text-xl text-center my-4">Click on a Hero to get started</h2>

        <div class="hero-container">
            <hero [hero]="makoto" description="The main character from Persona 3" (click)="openHeroDialog(makoto)"
              (showBattle)="addHeroToBattle($event)"></hero>
            <hero [hero]="yukari" description="One of the heroines from Persona 3" (click)="openHeroDialog(yukari)"
              (showBattle)="addHeroToBattle($event)"></hero>
        </div>
        <div class="battle-container" *ngIf="heroes.length > 0">
            <h1 class="text-2xl text-center font-bold my-4">Battle Menu</h1>
            <battle [heroes]="heroes"></battle>
            <button class="battle-button" (click)="startBattle()">
              Battle
            </button>
        </div>
    </div>
    <audio autoplay loop [volume]="0.25" *ngIf="musicOn">
      <source src="../assets/persona4-junes.mp3" type="audio/mp3">
    </audio>
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [HeroComponent, BattleComponent, CommonModule, MatExpansionModule]
})
export class MainMenuComponent {

    makoto: Hero = new Hero(1, 'Makoto', 'Hero', 0);
    yukari: Hero = new Hero(2, 'Yukari', 'Mage', 0);

    heroes: string[] = [];
        // Add more heroes as needed
    musicOn: boolean = false;
    musicSrc: string = "";

      constructor(private dialog: MatDialog) {}
    
      openHeroDialog(hero: Hero): void {
        const dialogRef = this.dialog.open(DialogMenuComponent, {
          width: '250px',
          data: hero
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result.action === 'add') {
            this.addHeroToBattle(result.hero.heroName);
          } else if (result.action === 'remove') {
            this.heroes = this.heroes.filter(heroName => heroName !== result.hero.heroName);
          }
        });
      }

      addHeroToBattle(heroName: string): void {
        if (!this.heroes.includes(heroName))
        this.heroes.push(heroName);
      }

      startBattle() {
        this.setMusic();
        this.musicOn = true;
      }

      setMusic() {
        this.musicSrc = this.heroes.length > 1 ? "../assets/persona4-junes.mp3" : "../assets/persona3-mass-destruction.mp3";
      }

    title = 'Main Menu';
}