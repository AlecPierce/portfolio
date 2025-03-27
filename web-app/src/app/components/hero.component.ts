import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../classes/hero';
import { StatsComponent } from './stats.component';

@Component({
    selector: 'hero',
    template: `
    <div class="bg-gray-700 p-4 rounded-lg shadow-lg w-64 h-auto">
        <div class="rounded-lg p-10 bg-blue-600">
            <h2 class="text-2xl font-italic mb-4">{{hero.heroName}}</h2>
            <p class="mb-2">{{description}}</p>
            <p>Class: {{hero.jobClass}}</p>
            <p>Status: {{hero.isInParty ? 'In Party' : 'Not in Party'}}</p>
            <stats [stats]="hero.stats" [isFullStats]="false"></stats>
        </div>
    </div>`,
    standalone: true,
    styleUrls: [],
    imports: [StatsComponent]
})
export class HeroComponent {

    @Input({ required: true })
    hero!: Hero;

    @Input({ required: false })
    description?: string;

    @Output() showBattle = new EventEmitter<string>();

    showBattleEvent() {
        this.showBattle.emit(this.hero.heroName);
    }

    // stats: Stats = this.hero.stats;

    title = 'Hero Component';
}