import { Component, input } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroComponent } from '../components/hero.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Menu</h1>
            <hero name="Makoto" class="Hero" [level]="1" [exp]="0" [hp]="10" [mp]="5"></hero>
            <hero name="Yukari" class="Healer" description="Cute girl of the Lovers Arcana from Persona 3" [level]="1" [exp]="0" [hp]="5" [mp]="10"></hero>
            <!-- <hero></hero>
            <hero></hero>
            <hero></hero> -->
        </div>
    `,
    styles: [],
    imports: [HeroComponent]
})
export class MainMenuComponent {
    title = 'Main Menu';
}