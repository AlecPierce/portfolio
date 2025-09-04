import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../classes/hero';
import { StatsComponent } from './stats.component';

@Component({
  selector: 'hero',
  template: ` <div
    class="hover:bg-gray-800 bg-gray-900 ml-6 p-4 rounded-lg shadow-lg w-64 h-auto border border-[cornflowerblue]"
    style="cursor: pointer;"
    (click)="heroClicked()"
  >
    <h2 class="text-2xl font-italic mb-4">{{ hero.heroName }}</h2>
    <p class="mb-2">{{ description }}</p>
    <p>Class: {{ hero.jobClass }}</p>
    <p>Status: {{ hero.isInParty ? 'In Party' : 'Not in Party' }}</p>
    <stats [stats]="hero.stats" [isFullStats]="false"></stats>
  </div>`,
  standalone: true,
  styleUrls: [],
  imports: [StatsComponent],
})
export class HeroComponent {
  @Input({ required: true })
  hero!: Hero;

  @Input({ required: false })
  description?: string;

  @Output() clicked = new EventEmitter<Hero>();

  heroClicked() {
    this.clicked.emit(this.hero);
  }

  title = 'Hero Component';
}
