import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';
import { DialogMenuComponent } from './dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { BattleComponent } from "../components/battle.component";
import { CarouselModule } from 'primeng/carousel';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
      <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
      <h2 class="text-xl text-center my-4">Click on a Hero to get started</h2>
    
      <div class="hero-container">
            <p-carousel [value]="heroes" [numVisible]="6" [numScroll]="3" [circular]="false" [responsiveOptions]="responsiveOptions">
              <ng-template let-hero #item>
                <hero [hero]="hero" [description]="hero.jobClass" (click)="openHeroDialog(hero)"
                        (showBattle)="addHeroToBattle($event)"></hero>
              </ng-template>
            </p-carousel>
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
    imports: [HeroComponent, BattleComponent, MatExpansionModule, CarouselModule]
})
export class MainMenuComponent implements OnDestroy, OnInit {

    makoto: Hero = new Hero(1, 'Makoto', 'The main character from Persona 3', 'Hero', 0);
    yukari: Hero = new Hero(2, 'Yukari', 'One of the heroines from Persona 3', 'Archer', 0);
    aigis: Hero = new Hero(3, 'Aigis', 'One of the heroines from Persona 3; She fights alongside the team with a bow and wind abilities', 'Red Mage', 0);
    fuuka: Hero = new Hero(4, 'Fuuka', 'One of the heroines from Persona 3; She guides the team through the Dark Hour', 'Support', 0);
    mitsuru: Hero = new Hero(5, 'Mitsuru', 'One of the heroines from Persona 3; She leads the team until Makoto showed up', 'Blue Mage', 0);
    junpei: Hero = new Hero(6, 'Junpei', 'One of the heroes from Persona 3; He fights alongside the team with a baseball bat', 'Brawler', 0);
    akihiko: Hero = new Hero(7, 'Akihiko', 'One of the heroes from Persona 3; He fights with his knuckles and electric abilities', 'Berserker', 0);
    ken: Hero = new Hero(8, 'Ken', 'One of the heroes from Persona 3; Small lad that joins later on in the story; Uses electric/healing abilities', 'Lancer', 0);
    koromaru: Hero = new Hero(9, 'Koromaru', 'One of the heroes from Persona 3; Friendly neighborhood dog who lost his owner and finds himself a new home; Uses dark/fire abilities and fights with a kunai', 'Red Mage', 0);

    responsiveOptions: any[] | undefined;
    heroes: Hero[] = [this.makoto, this.yukari, this.aigis, this.fuuka, this.mitsuru, this.junpei, this.akihiko, this.ken, this.koromaru];
    heroNames: string[] = [];
    addedHeroes: Hero[] = [];
        // Add more heroes as needed
    musicOn: boolean = false;
    musicSrc: string = "";

      constructor(private dialog: MatDialog) {}
      ngOnInit(): void {
        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];
      }

      ngOnDestroy(): void {
          this.dialog.closeAll();
      }
    
      openHeroDialog(hero: Hero): void {
        const dialogRef = this.dialog.open(DialogMenuComponent, {
          width: '250px',
          data: hero
        });

        this.setMusic();
    
        dialogRef.afterClosed().subscribe(result => {
          if (result?.action === 'add') {
            this.addHeroToBattle(result.hero);
          } else if (result?.action === 'remove') {
            this.addedHeroes = this.addedHeroes.filter(hero => hero.heroName !== result.hero.heroName);
          }
        });
      }

      addHeroToBattle(hero: Hero): void {
        if (!this.addedHeroes.includes(hero))
        this.addedHeroes.push(hero);
      }

      startBattle() {
        this.setMusic(true);
      }

      setMusic(turnOn: boolean = false) {
        this.musicOn = false;
        if (turnOn) {
          this.musicSrc = this.heroes.length > 1 ? "../assets/persona4-junes.mp3" : "../assets/persona3-mass-destruction.mp3";
          this.musicOn = true;
        }
      }

    title = 'Main Menu';
}