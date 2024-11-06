import { Component, input } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroClassComponent } from '../components/heroClass.component';

@Component({
    selector: 'app-main-menu',
    standalone: true,
    template: `
    <div class="flexbox text-white">
        <h1 class="text-2xl text-center font-bold my-4">Hero Class Menu</h1>
            <hero-class></hero-class>
            <hero-class></hero-class>
            <hero-class></hero-class>
            <hero-class></hero-class>
        </div>
    `,
    styles: [],
    imports: [HeroClassComponent]
})
export class MainMenuComponent {
    title = 'Main Menu';
}