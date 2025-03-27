import { Component } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { BattleComponent } from "../components/battle.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
        <div class="hero-container">
            <hero [hero]="makoto" description="The main character from Persona 3" (click)="openHeroDialog(makoto)"
              (showBattle)="addHeroToBattle($event)"></hero>
            <hero [hero]="yukari" description="One of the heroines from Persona 3" (click)="openHeroDialog(yukari)"
              (showBattle)="addHeroToBattle($event)"></hero>
        </div>
        <div class="battle-container" *ngIf="heroes.length > 0">
            <h1 class="text-2xl text-center font-bold my-4">Battle Menu</h1>
            <battle [heroes]="heroes"></battle>
        </div>
    </div>
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [HeroComponent, BattleComponent, CommonModule]
})
export class MainMenuComponent {
    makoto: Hero = new Hero(1, 'Makoto', 'Hero', 0);
    yukari: Hero = new Hero(2, 'Yukari', 'Mage', 0);

    heroes: string[] = [];
        // Add more heroes as needed
    
      constructor(private dialog: MatDialog) {}
    
      openHeroDialog(hero: Hero): void {
        const dialogRef = this.dialog.open(DialogMenuComponent, {
          width: '250px',
          data: hero
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result.action === 'battle') {
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

    title = 'Main Menu';
}