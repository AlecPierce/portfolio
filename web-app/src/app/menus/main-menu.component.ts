import { Component, input } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { Stats } from '../classes/stats';

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
        <div class="hero-container">
            <hero [hero]="makoto" description="The main character from Persona 3" (click)="openHeroDialog(makoto)"></hero>
            <hero [hero]="yukari" description="One of the heroines from Persona 3" (click)="openHeroDialog(yukari)"></hero>
        </div>
    </div>
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [HeroComponent]
})
export class MainMenuComponent {
    makoto: Hero = new Hero(1, 'Makoto', 'Hero', 0);
    yukari: Hero = new Hero(2, 'Yukari', 'Mage', 0);

    heroes: Hero[] = [this.makoto, this.yukari];
        // Add more heroes as needed
    
      constructor(private dialog: MatDialog) {}
    
      openHeroDialog(hero: Hero): void {
        const dialogRef = this.dialog.open(DialogMenuComponent, {
          width: '250px',
          data: hero
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            console.log('Hero action:', result);
          }
        });
      }
    title = 'Main Menu';
}