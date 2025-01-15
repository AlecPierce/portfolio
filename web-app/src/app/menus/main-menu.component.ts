import { Component, input } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';

@Component({
    selector: 'app-main-menu',
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
        <div class="hero-container">
            <hero name="Makoto" class="Hero" [level]="1" [exp]="0" [hp]="10" [mp]="5"></hero>
            <hero name="Yukari Takeba" class="Healer" description="Lovers Arcana from Persona 3" [level]="1" [exp]="0" [hp]="5" [mp]="10"></hero>
        </div>
    </div>
    `,
    styleUrls: ['./main-menu.component.scss'],
    imports: [HeroComponent]
})
export class MainMenuComponent {
    title = 'Main Menu';
}